		function mapASlide(){
			$("#findACenterCont").toggleClass("listOpen");
			getCenterList();
		}

		function centerDetailClose(){
			$("#detailCenter").removeClass("on");
			//infowindow.close();
			detailCenterNo	=	0;
		}
		function listByOpen(){
			$("#listByArea").addClass("on");
		}
		function listByClose(){
			$("#listByArea").removeClass("on");
		}
		function listByApply(){
			getCenterList();
			listByClose();
			$("#btnClearAll").show();
		}
		function clearAll(isMovePostion){
			//search clear
			/*
			$("input[name=subject]").each(function(){
				$(this).prop("checked", false);
			});
			$("#offerAll").prop("checked", false);
			*/
			$("#listByArea input[type=checkbox]").prop("checked", false);
			$("input[name=listSort]").each(function(){
				$(this).prop("checked", false);
				if ( $(this).val() == "D" ){
					$(this).prop("checked", true);
				}
			});

			getCenterList(isMovePostion);
			$("#btnClearAll").hide();
		}
		var infowindow;
		// init geolocation
		var getLocation = function (callbackFnc) {
			if (navigator.geolocation) { // support geolocation
				navigator.geolocation.getCurrentPosition(function(position) {
					CUR_LATI 	= position.coords.latitude;
					CUR_LONGI 	= position.coords.longitude;

					$("#myLocLati").val(CUR_LATI);		//my position
					$("#myLocLongi").val(CUR_LONGI);	//my position

				  	CUR_LOCATION = "Y";
					if ( typeof callbackFnc  === 'function'){
						callbackFnc();
					}
			    }, function(error) {
			    	alert(messageList.NOT_FOUND_LOCATION);
			    	CUR_LATI  	=	"";
			    	CUR_LONGI	=	"";

					$("#myLocLati").val("0");		//my position
					$("#myLocLongi").val("0");	//my position

					if ( typeof callbackFnc  === 'function'){
						callbackFnc();
					}
			    }, {
			      enableHighAccuracy: false,
			      maximumAge: 0,
			      timeout: Infinity
			    });
			} else {
		    	alert(messageList.NOT_FOUND_LOCATION);
		    	CUR_LATI  	=	"";
		    	CUR_LONGI	=	"";

		    	$("#myLocLati").val("0");		//my position
				$("#myLocLongi").val("0");	//my position

				if ( typeof callbackFnc  === 'function'){
					callbackFnc();
				}
			}
		}

		//
		var initMap = function () {
			if (CUR_LATI == "0" || CUR_LONGI == "0"){
				getLocation(initMap);
				return;
			}
		    var mapLocation = new google.maps.LatLng(CUR_LATI, CUR_LONGI); // center position
		    var zoomCtrl = 15;
		    if (CUR_LOCATION == "Y") {
		    	zoomCtrl = 15;
		    }

		    geocoder = new google.maps.Geocoder();

		    var mapOptions = {
		      center: mapLocation,
		      zoom: zoomCtrl,
		      //gestureHandling: 'greedy',
		      mapTypeControl : false,
		      //zoomControl:true,
		      //streetViewControl:true,
		      mapTypeId: google.maps.MapTypeId.ROADMAP
		    };
		    map = new google.maps.Map(document.getElementById("mapLayer"), mapOptions);

		    // circle -- disabled
//		    if (CUR_LOCATION == "Y") {
//			    var myLocation = new google.maps.Circle({
//			        center: mapLocation,
//			        radius: 500,
//			        strokeColor: "#66FF66",
//			        strokeOpacity: 0.8,
//			        strokeWeight: 2,
//			        fillColor: "#66FF66",
//			        fillOpacity: 0.4
//			    });
//
//			    myLocation.setMap(map);
//		    }

		    if (navigator.geolocation) {
			    var homeControlDiv = document.createElement('div');
			    var homeControl = new setLocationBtn(homeControlDiv, map);
			    map.controls[google.maps.ControlPosition.TOP_LEFT].push(homeControlDiv);
		    }

		    getCenterList();

		    google.maps.event.addListener(map, 'dragend', function(){    	// drag event
			    dragMap();
		    });
		    google.maps.event.addListener(map, 'zoom_changed', function(){	// zoom event
			    dragMap();
		    });
		}

		// marker
		var addMarker = function (){
		    infowindow = new google.maps.InfoWindow();

		    var i, item;
			var centerNo;

		    for (i = 0, item; item=jsStoreList[i]; i++) {
		    	if (nevl(item.distMyLocation, "") != "") {
					marker = new google.maps.Marker({
						  position: new google.maps.LatLng(item.locLati, item.locLongi),
						  icon: '/images/icon/pin.png', //
						  title : item.centerName,
						//  animation: google.maps.Animation.DROP,
						  map: map
						});
						markers.push(marker); //

						google.maps.event.addListener(marker, 'click', (function(marker, i) {
						  return function() {
							 infowindow.close();
							 infowindow = new google.maps.InfoWindow({content : nevl(jsStoreList[i].centerName,"") + '<br/>' + nevl(jsStoreList[i].address,"")});
							 infowindow.open(map,marker);
							 mapLocation = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
							 map.panTo(mapLocation);
							 $.scrollMove(jsStoreList[i].centerNo);
						  }
						})(marker, i));
		    	}
		    }
		}

		// Center list
		var getCenterList = function (isMovePostion) {
			loadingAdd("#centerList");

			if (CUR_LATI == "0" || CUR_LONGI == "0"){
				getLocation(getCenterList);
				return;
			}

			if(map != null) {
				zoomLevel = map.getZoom();
				if (zoomLevel > 8) {
					surDistance = "1.2";
				}	
			}

			$("#centerLati").val(CUR_LATI);
			$("#centerLongi").val(CUR_LONGI);

			//distance -> mile no limit
			//name order -> mile 500 limit
			$("#surDistance").val("");
			//pause
			if ( $("input[name=listSort]:checked").val()=="A"){
//				$("#surDistance").val("500"); // order disabled
			}
			//$("#surDistance").val(surDistance);

			var	params	=	$("#searchFrm").serialize();

			//
			$.post("getCenterList.do", params, function(data){
				jsStoreList = JSON.parse(data || '[]');
				var innerHTML = "";
				if (jsStoreList.length > 0) {
					for (var i=0, item; item=jsStoreList[i]; i++) {
						innerHTML += "<li id=\"centerNo_"+item.centerNo+"\" data=\""+ i +"\">";
						var openDays	=	nevl(item.openDays,"");

						if ( openDays.endsWith(", ")){
							openDays	=	openDays.substring(0, openDays.length -2);
						}

						//hidden filed
						innerHTML += "<input type=\"hidden\" id='introPhoto_"+item.centerNo+"' value=\""+nevl(item.introPhoto,"")+"\">";
						innerHTML += "<input type=\"hidden\" id='centerName_"+item.centerNo+"' value=\""+nevl(item.centerName,"")+"\">";
						innerHTML += "<input type=\"hidden\" id='distance_"+item.centerNo+"' value=\""+nevl(item.distMyLocation,"")+"\">";
						innerHTML += "<input type=\"hidden\" id='address_"+item.centerNo+"' value=\""+nevl(item.address,"")+"\">";
						innerHTML += "<input type=\"hidden\" id='pCity_"+item.centerNo+"' value=\""+nevl(item.pCity,"")+"\">";
						innerHTML += "<input type=\"hidden\" id='zipcode_"+item.centerNo+"' value=\""+nevl(item.zipcode,"")+"\">";
						innerHTML += "<input type=\"hidden\" id='homeurl_"+item.centerNo+"' value=\""+nevl(item.homeurl,"")+"\">";
						innerHTML += "<input type=\"hidden\" id='email_"+item.centerNo+"' value=\""+nevl(item.email,"")+"\">";
						innerHTML += "<input type=\"hidden\" id='phone_"+item.centerNo+"' value=\""+nevl(item.phone,"")+"\">";
						innerHTML += "<input type=\"hidden\" id='openTime_"+item.centerNo+"' value=\""+nevl(item.openTime,"")+"\">";
						innerHTML += "<input type=\"hidden\" id='subject_"+item.centerNo+"' value=\""+nevl(item.subject,"")+"\">";
						innerHTML += "<input type=\"hidden\" id='locLati_"+item.centerNo+"' value=\""+nevl(item.locLati,"")+"\">";
						innerHTML += "<input type=\"hidden\" id='locLongi_"+item.centerNo+"' value=\""+nevl(item.locLongi,"")+"\">";
						innerHTML += "<input type=\"hidden\" id='promotionYn_"+item.centerNo+"' value=\""+nevl(item.promotionYn,"")+"\">";
						innerHTML += "<input type=\"hidden\" id='openDays_"+item.centerNo+"' value=\""+nevl(openDays,"")+"\">";
						innerHTML += "<input type=\"hidden\" id='recognition_"+item.centerNo+"' value=\""+nevl(item.recognition,"")+"\">";
						innerHTML += "<input type=\"hidden\" id='characteristics1_"+item.centerNo+"' value=\""+nevl(item.characteristics1,"")+"\">";
						innerHTML += "<input type=\"hidden\" id='characteristics2_"+item.centerNo+"' value=\""+nevl(item.characteristics2,"")+"\">";
						innerHTML += "<input type=\"hidden\" id='characteristics3_"+item.centerNo+"' value=\""+nevl(item.characteristics3,"")+"\">";
						innerHTML += "<input type=\"hidden\" id='promotion1_"+item.centerNo+"' value=\""+nevl(item.promotion1,"")+"\">";
						innerHTML += "<input type=\"hidden\" id='promotion2_"+item.centerNo+"' value=\""+nevl(item.promotion2,"")+"\">";
						innerHTML += "<input type=\"hidden\" id='promotion3_"+item.centerNo+"' value=\""+nevl(item.promotion3,"")+"\">";
						innerHTML += "<input type=\"hidden\" id='centerSiteSeq_"+item.centerNo+"' value=\""+nevl(item.centerSiteSeq,"")+"\">";
						innerHTML += "<input type=\"hidden\" id='centerOpenTime_"+item.centerNo+"' value=\""+nevl(item.centerOpenTime,"")+"\">";
						innerHTML += "<input type=\"hidden\" id='ispYn_"+item.centerNo+"' value=\""+nevl(item.ispYn,"")+"\">";

						innerHTML += "<div class=\"side side2\">";
						if (nevl(item.distMyLocation, "") != "") {
							innerHTML += "	<div class=\"distance\"><b>" + item.distMyLocation + "</b> "+distanceUnit+"</div>";
						}
						innerHTML += "	<div class=\"thum\"><img src=\""+nevl(item.introPhoto,"")+"\" alt=\"\"></div>";
						if (pageName == "onair1") {
							innerHTML += "<a href=\"/"+COUNTRY_PATH+"/on-air/introduction.do?centerNo="+item.centerNo+"#FORM_SECTION\" class=\"btn btnTypeA btnSizeC btnSelect\" style=\"width:144px; height:40px; line-height:38px; font-weight:500; font-size:13px;\">SELECT</a>";
						} else if (pageName == "onair2") {
							innerHTML += "<a href=\"/"+COUNTRY_PATH+"/on-air/curriculum-design.do?centerNo="+item.centerNo+"#FORM_SECTION\" class=\"btn btnTypeA btnSizeC btnSelect\" style=\"width:144px; height:40px; line-height:38px; font-weight:500; font-size:13px;\">SELECT</a>";
						} else if (pageName == "findCenter") {
							innerHTML += "	<a href=\"/"+COUNTRY_PATH+"/customer/contact-us.do?centerNo="+item.centerNo+"\" class=\"btn btnTypeA btnSizeC\" style=\"width:144px; height:40px; line-height:38px; font-weight:500; font-size:13px;\">SELECT</a>";
						} else if (pageName == "summitOfMath") {
							innerHTML += "	<a href='#' onclick='setCenterCd("+item.centerNo+");javascript:document.info.submit();' class=\"btn btnTypeA btnSizeC btnSelect\" style=\"width:144px; height:40px; line-height:38px; font-weight:500; font-size:13px;\">SELECT</a>";
						} else if (pageName == "comon") {
							innerHTML += "<a href=\"/"+COUNTRY_PATH+"/programs/comon.do?centerNo="+item.centerNo+"#FORM_SECTION\" class=\"btn btnTypeA btnSizeC btnSelect\" style=\"width:144px; height:40px; line-height:38px; font-weight:500; font-size:13px;\">SELECT</a>";
						} else if (pageName == "contact") {
							innerHTML += "<a href=\"/"+COUNTRY_PATH+"/customer/contact-us.do?centerNo="+item.centerNo+"#FORM_SECTION\" class=\"btn btnTypeA btnSizeC btnSelect\" style=\"width:144px; height:40px; line-height:38px; font-weight:500; font-size:13px;\">SELECT</a>";
						} else if (pageName == "eyelevel") {
							innerHTML += "<a href=\"/"+COUNTRY_PATH+"/eye-level/introduction.do?centerNo="+item.centerNo+"#information\" class=\"btn btnTypeA btnSizeC btnSelect\" style=\"width:144px; height:40px; line-height:38px; font-weight:500; font-size:13px;\">SELECT</a>";
						} else if (pageName == "whyeyelevel") {
							innerHTML += "<a href=\"/"+COUNTRY_PATH+"/why-eye-level/intro.do?centerNo="+item.centerNo+"#FORM_SECTION\" class=\"btn btnTypeA btnSizeC btnSelect\" style=\"width:144px; height:40px; line-height:38px; font-weight:500; font-size:13px;\">SELECT</a>";
						} else if (pageName == "mainindex") {
							innerHTML += "<a href=\"/"+COUNTRY_PATH+"/index.do?centerNo="+item.centerNo+"#FORM_SECTION\" class=\"btn btnTypeA btnSizeC btnSelect\" style=\"width:144px; height:40px; line-height:38px; font-weight:500; font-size:13px;\">SELECT</a>";
						}
						if (nevl(item.centerSiteSeq, "") != "") {
							innerHTML += "<a href=\""+nevl(item.homeurl, "").replace('www.myeyelevel.com','')+"\" target=\"_blank\" class=\"btn btnTypeH btnSizeC\" style=\"width:144px; margin-top:10px; height:40px; line-height:38px; font-weight:500; font-size:13px;\">WEBSITE</a>";
						} else if (nevl(item.centerSiteSeq, "") == "" && nevl(item.homeurl, "") != ""  && !item.homeurl.startsWith("www.myeyelevel.com")) {
							innerHTML += "<a href=\"http://"+item.homeurl+"\" target=\"_blank\" class=\"btn btnTypeH btnSizeC\" style=\"width:144px; margin-top:10px; height:40px; line-height:38px; font-weight:500; font-size:13px;\">WEBSITE</a>";
						}
						innerHTML += "</div>"
						innerHTML += "<a href=\"#\" onclick=\"getCenterDetail('"+item.centerNo+"'); return false;\">";
						innerHTML += "<strong class=\"tit\">";
						innerHTML += item.centerName;
						if (nevl(item.promotionYn, "") == "Y") {
							innerHTML += " <span class=\"icon\">Promo</span>";
						}
						innerHTML += "</strong>";
						innerHTML += "<address>"+nevl(item.address,"");
						if (nevl(item.pCity, "") != "") {
							innerHTML += "<br>"+nevl(item.pCity, "");
						}
						if (nevl(item.zipcode, "") != "") {
							innerHTML += "<br>"+nevl(item.zipcode, "");
						}
						innerHTML += "</address>"
						innerHTML += "<dl>";
						innerHTML += "<dt><img src=\"/images/icon/tel_bs.png\" alt=\"TEL\"></dt>";
						innerHTML += "<dd><b>" + nevl(item.phone,"") + "</b></dd>";
						innerHTML += "</dl>";

						if (nevl(item.subject, "") != "") {
							innerHTML += "<dl>";
							innerHTML += "<dt><img src=\"/images/icon/subject_bs.png\" alt=\"SUBJECT\"></dt>";
							innerHTML += "<dd>" + nevl(item.subject,"") + "</dd>";
							innerHTML += "</dl>";
						}
						if (nevl(item.openDays, "") != "") {
							innerHTML += "<dl>";
							innerHTML += "<dt><img src=\"/images/icon/openday_bs.png\" alt=\"Open Day\"></dt>";
							innerHTML += "<dd>"+ openDays +"</dd>";
							innerHTML += "</dl>";
						}
						
						if (nevl(item.ispYn, "") == "S") {
	                        innerHTML += "<dl>";
	                        innerHTML += "<dt><img src=\"/images/icon/itc_bs.png\" alt=\"Instructor Training Certified\"></dt>";
	                        innerHTML += "<dd>Instructor Training Certified<div class=\"graph_balloon type4 center\">";
	                        innerHTML += "<span class=\"balloon\"><em>*</em>This center is recognized for completing the <br>Eye Level Instructor Certification Training Program.</span>";
	                        innerHTML += "</div></dd>";
	                        innerHTML += "</dl>";
						}

						innerHTML += "</a></li>";
						innerHTML += "";
						innerHTML += "";

						if ( detailCenterNo  == item.centerNo ){
							if (nevl(item.distMyLocation, "") != "") {
								$("#detailDistance").html("<b>"+ item.distMyLocation +"</b> "+distanceUnit);
							}
						}

						if ( i == 0 && isMovePostion ){
							if (nevl(item.distMyLocation, "") != "") {
								if ( "Z" == isMovePostion){
									movePostion(CUR_LATI, CUR_LONGI );
								} else {
									movePostion(item.locLati, item.locLongi );
								}
							}
						}
					}
				}else {
					innerHTML += "<li class=\"none\">No centers were found.</li>";
				}

				$("#totalCnt").html(jsStoreList.length);
				$("#centerList").html(innerHTML);
				loadingRemove();

				//set marker
				addMarker();
			});
		}

		var getCenterDetail = function(centerNo) {
			var item	=	{
				introPhoto	:  $("#introPhoto_"+centerNo).val(),
				centerName	:  $("#centerName_"+centerNo).val(),
				distMyLocation	:  $("#distance_"+centerNo).val(),
				address		:  $("#address_"+centerNo).val(),
				pCity		:  $("#pCity_"+centerNo).val(),
				zipcode		:  $("#zipcode_"+centerNo).val(),
				homeurl		:  $("#homeurl_"+centerNo).val(),
				email		:  $("#email_"+centerNo).val(),
				phone		:  $("#phone_"+centerNo).val(),
				subject		:  $("#subject_"+centerNo).val(),
				openTime	:  $("#openTime_"+centerNo).val(),
				locLati		:	$("#locLati_"+centerNo).val(),
				locLongi	:	$("#locLongi_"+centerNo).val(),
				promotionYn	:	$("#promotionYn_"+centerNo).val(),
				recognition	:	$("#recognition_"+centerNo).val(),
				characteristics1	:	$("#characteristics1_"+centerNo).val(),
				characteristics2	:	$("#characteristics2_"+centerNo).val(),
				characteristics3	:	$("#characteristics3_"+centerNo).val(),
				promotion1	:	$("#promotion1_"+centerNo).val(),
				promotion2	:	$("#promotion2_"+centerNo).val(),
				promotion3	:	$("#promotion3_"+centerNo).val(),
				openDays	:	$("#openDays_"+centerNo).val(),
				centerSiteSeq	:	$("#centerSiteSeq_"+centerNo).val(),
				centerOpenTime	:	$("#centerOpenTime_"+centerNo).val(),
				ispYn	:	$("#ispYn_"+centerNo).val()
			};

			var detailHTML = "";
				detailHTML += "<div class=\"header\"><div>";
				detailHTML += "<a href=\"#\" onclick=\"centerDetailClose(); return false;\" class=\"btnBack\"><img src=\"/images/btn/btn_back.png\" alt=\"back\"></a>";
				detailHTML += "</div></div>";
				detailHTML += "<div class=\"detailCont scr2\">";

				if (nevl(item.introPhoto, "") != "") {
					detailHTML += "		<div class=\"thum\">";
					detailHTML += "			<img src='"+item.introPhoto+"' alt=\""+item.centerName+"\">";
					detailHTML += "		</div>";
				}

				detailHTML += "<strong class=\"tit\">";
				detailHTML += "<a href=\"#\" onclick=\"movePostion('"+item.locLati+"', '"+item.locLongi +"'); return false;\" >";
				detailHTML += item.centerName;
				detailHTML += "</a>";
				if (nevl(item.distMyLocation, "") != "") {
					detailHTML += "<span class=\"distance\" id='detailDistance'><b>"+item.distMyLocation+"</b> "+distanceUnit+"</span>";
				}
				if (nevl(item.promotionYn, "") == "Y") {
					detailHTML += "	<span class=\"icon\">Promo</span>";
				}
				detailHTML += "</strong>";
				detailHTML += "<ul class=\"detailInfo\">";
				detailHTML += "<li>";
				detailHTML += "<strong>Address</strong>";
				detailHTML += item.address;

				if (nevl(item.pCity, "") != "") {
					detailHTML += "<br>"+nevl(item.pCity, "");
				}
				if (nevl(item.zipcode, "") != "") {
					detailHTML += "<br>"+nevl(item.zipcode, "");
				}

 				detailHTML += "</li>";
 				if (nevl(item.homeurl, "") != "") {
 					/*
					if (item.centerSiteSeq != "" || (item.centerSiteSeq == "" && !item.homeurl.startsWith("www.myeyelevel.com"))) {
	 					detailHTML += "<li>";
	 					detailHTML += "<strong>Website</strong>";
	 					detailHTML += item.homeurl;
	 					detailHTML += "</li>";
					}
					*/

	 					detailHTML += "<li>";
	 					detailHTML += "<strong>Website</strong>";
	 					detailHTML += "<a href=\"http://"+item.homeurl+"\"  target='_blank'><u>";
	 					detailHTML += item.homeurl;
	 					detailHTML += "</u></a>";
	 					detailHTML += "</li>";

 				}

 				detailHTML += "<li>";
				detailHTML += "<strong>Email</strong>";
				detailHTML += item.email;
				detailHTML += "</li>";
				detailHTML += "<li>";
				detailHTML += "<strong>Tel</strong>";
				detailHTML += item.phone;
				detailHTML += "</li>";
 				if (nevl(item.subject, "") != "") {
 					detailHTML += "<li>";
					detailHTML += "<strong>Programs</strong>";
					detailHTML += item.subject;
					detailHTML += "</li>";
 				}
 				if (nevl(item.openDays, "") != "") {
 					detailHTML += "<li>";
	 				detailHTML += "<strong>Open Day</strong>";
					detailHTML += item.openDays;
					detailHTML += "</li>";
 				}

				if (nevl(item.centerOpenTime, "") != "") {
 					detailHTML += "<li>";
 					detailHTML += "<strong>Open Hours</strong>";
 					detailHTML += item.centerOpenTime.replace(',', '').replace(/,/g, '<br />');
 					detailHTML += "</li>";
				} else if (nevl(item.openTime, "") != "") {
 					detailHTML += "<li>";
 					detailHTML += "<strong>Open Hours</strong>";
 					detailHTML += item.openTime.replace(/(?:\r\n|\r|\n)/g, '<br />');
 					detailHTML += "</li>";
 				}

 				if ( nevl(item.recognition, "") != ""){
 	 				detailHTML += "<li>";
 	 				detailHTML += "<strong>Recognition</strong>";
 					detailHTML += item.recognition;
 					detailHTML += "</li>";
 				}

 				if (item.promotion1 != "" || item.promotion2 != "" || item.promotion3 != "" ){
 					var promotion = "";
 					if ( item.promotion1 != "" ){
 						promotion += item.promotion1;
 					}
 					if ( item.promotion2 != "" ){
 						promotion += ", "+item.promotion2;
 					}
 					if ( item.promotion3 != "" ){
 						promotion += ", "+item.promotion3;
 					}

 					detailHTML += "<li>";
 					detailHTML += "<strong>Promotion</strong>";
 					detailHTML += promotion;
 					detailHTML += "</li>";
 				}

 				if (item.characteristics1 != "" || item.characteristics2 != "" || item.characteristics3 != "" ){
 					var characteristics = "";
 					if ( item.characteristics1 != "" ){
 						characteristics += item.characteristics1;
 					}
 					if ( item.characteristics2 != "" ){
 						characteristics += ", "+item.characteristics2;
 					}
 					if ( item.characteristics3 != "" ){
 						characteristics += ", "+item.characteristics3;
 					}

 					detailHTML += "<li>";
 					detailHTML += "<strong>Characteristics</strong>";
 					detailHTML += characteristics;
 					detailHTML += "</li>";
 				}
 				
 				if (nevl(item.ispYn, "") == "S") {
					detailHTML += "<li>";
					detailHTML += "<strong>Center</strong>";
					detailHTML += "Instructor Training <br>Certified<div class=\"graph_balloon type4 center\">";
	                detailHTML += "<span class=\"balloon\"><em>*</em>This center is recognized for completing the <br>Eye Level Instructor Certification Training Program.</span></div>";
					detailHTML += "</li>";
				}

				detailHTML += "</ul>";
				detailHTML += "<div class=\"btnArea ac\">";

				if (pageName == "onair1") {
					detailHTML += "<a href=\"/"+COUNTRY_PATH+"/on-air/introduction.do?centerNo="+centerNo+"#FORM_SECTION\" class=\"btn btnSizeC btnTypeA\" style=\"width:145px; height:40px; line-height:38px; font-weight:500; font-size:13px;\">SELECT</a>";
				} else if (pageName == "onair2") {
					detailHTML += "<a href=\"/"+COUNTRY_PATH+"/on-air/curriculum-design.do?centerNo="+centerNo+"#FORM_SECTION\" class=\"btn btnSizeC btnTypeA\" style=\"width:145px; height:40px; line-height:38px; font-weight:500; font-size:13px;\">SELECT</a>";
				} else if (pageName == "summitOfMath") {
					detailHTML += "<a href=\"/"+COUNTRY_PATH+"/summit-of-math/summitOfMath.do?centerNo="+centerNo+"\" class=\"btn btnSizeC btnTypeA\" style=\"width:145px; height:40px; line-height:38px; font-weight:500; font-size:13px;\">SELECT</a>";
				} else if (pageName == "comon") {
					detailHTML += "<a href=\"/"+COUNTRY_PATH+"/programs/comon.do?centerNo="+centerNo+"#FORM_SECTION\" class=\"btn btnSizeC btnTypeA\" style=\"width:145px; height:40px; line-height:38px; font-weight:500; font-size:13px;\">SELECT</a>";	
				} else if (pageName == "eyelevel") {
					detailHTML += "<a href=\"/"+COUNTRY_PATH+"/eye-level/introduction.do?centerNo="+centerNo+"#information\" class=\"btn btnSizeC btnTypeA\" style=\"width:145px; height:40px; line-height:38px; font-weight:500; font-size:13px;\">SELECT</a>";
				} else if (pageName == "whyeyelevel") {
					detailHTML += "<a href=\"/"+COUNTRY_PATH+"/why-eye-level/intro.do?centerNo="+centerNo+"#FORM_SECTION\" class=\"btn btnSizeC btnTypeA\" style=\"width:145px; height:40px; line-height:38px; font-weight:500; font-size:13px;\">SELECT</a>";
				} else if (pageName == "mainindex") {
					detailHTML += "<a href=\"/"+COUNTRY_PATH+"/index.do?centerNo="+centerNo+"#FORM_SECTION\" class=\"btn btnSizeC btnTypeA\" style=\"width:145px; height:40px; line-height:38px; font-weight:500; font-size:13px;\">SELECT</a>";
				} else {
					detailHTML += "<a href=\"/"+COUNTRY_PATH+"/customer/contact-us.do?centerNo="+centerNo+"#FORM_SECTION\" class=\"btn btnSizeC btnTypeA\" style=\"width:145px; height:40px; line-height:38px; font-weight:500; font-size:13px;\">SELECT</a>";
				}
				if (item.centerSiteSeq != "") {
					detailHTML += "<a href=\""+item.homeurl.replace('www.myeyelevel.com','')+"\" target=\"_blank\" class=\"btn btnSizeC btnTypeH\" style=\"width:145px; margin-left:5px; height:40px; line-height:38px; font-weight:500; font-size:13px;\">WEBSITE</a>";
				} else if (nevl(item.centerSiteSeq,"") == "" && item.homeurl != ""  && !item.homeurl.startsWith("www.myeyelevel.com")) {
					detailHTML += "<a href=\"http://"+item.homeurl+"\" target=\"_blank\" class=\"btn btnSizeC btnTypeH\" style=\"width:145px; margin-left:5px; height:40px; line-height:38px; font-weight:500; font-size:13px;\">WEBSITE</a>";
				}
				detailHTML += "</div></div>";

				$("#detailCenter").html(detailHTML);
				$("#detailCenter").addClass("on");
				var idx = $("#centerNo_" + centerNo).attr("data");

				if (nevl(item.distMyLocation, "") != "") {
					movePostion(item.locLati, item.locLongi );
//					google.maps.event.trigger(markers[idx], 'click');
				}

				detailCenterNo	=	centerNo;
		}

		//drag event
		var dragMap = function () {
			var pos = map.getCenter();
			CUR_LATI = pos.lat();
			CUR_LONGI = pos.lng();

			$.clearMarkers();
			setTimeout(function() {
			    getCenterList();
			}, 500);
		}

		var setLocationBtn = function (controlDiv, map) {
			  controlDiv.style.padding = '20px';
			  var controlUI = document.createElement('div');
			  controlUI.style.cursor = 'pointer';
			  controlUI.title = 'GO my position';
			  controlDiv.appendChild(controlUI);
			  var controlText = document.createElement('div');
			  controlText.innerHTML = '<img src="/images/icon/mylocation.png" alt="MY LOCATION" onmouseover="this.src=/images/icon/mylocation_on.png" onmouseout="this.src=/images/icon/mylocation.png">'
			  controlUI.appendChild(controlText);

			  google.maps.event.addDomListener(controlUI, 'click', function() {
				  $("#countryCd option:eq(0)").prop("selected", "selected");
				  $("#cityCd option:eq(0)").prop("selected", "selected");
				  $("#centerName").val("");
				  CUR_LATI = "0";
				  CUR_LONGI = "0";
				  getCenterList();

				  if (navigator.geolocation) { //
					navigator.geolocation.getCurrentPosition(function(position) {
						movePostion(position.coords.latitude, position.coords.longitude);
					});
				  }
			  });
			}
		function setCenterCd(centerCd){
			document.getElementById("centerNo").value = centerCd;
		}


		function movePostion(lat, lng) {
//			alert(lat+"_"+lng);

//			if ( lat.trim() != "" && lng.trim() != ""){
			    var position = new google.maps.LatLng(lat, lng);
//			    alert("movePostion : " +position);
			    map.setCenter(position);
//			}
			// if (lat > 0 && lng > 0){
			// }
		}

		$.extend({
			scrollMove : function (centerNo) {
				var D_center = $("#centerNo_" + centerNo);
				if(!D_center.hasClass("focus")){
					$('#centerList li.focus').removeClass("focus");
					D_center.addClass("focus");
					var D_centerPos = D_center.position();
					var scrollTop = parseInt($("#centerList").scrollTop());
					var D_centerOff = D_center.offset();
					$('#centerList').animate({scrollTop : parseInt(D_centerPos.top) + scrollTop}, 400);
				}
			},
			clearMarkers : function () {
				if (typeof marker !== "undefined") {
					for (var i = 0; i < markers.length; i++) {
				          markers[i].setMap(null);
				    }
					markers = [];
				}
			}

		});

		String.prototype.endsWith = function(pattern) {
		    var d = this.length - pattern.length;
		    return d >= 0 && this.lastIndexOf(pattern) === d;
		};