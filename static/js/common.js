/*!
 * myeyelevel common func
 *
 */

/**
 * ajax util
 *
 * @param form form element
 * @param callback
 * @returns
 */
function ajaxSubmit(form, callback) {
	var isJQueryObject = form instanceof jQuery;
	var jForm = (isJQueryObject ? form : $(form));

	var formData = jForm.serialize();

	/*action 페이지에서는 결과 json을 출력해야 한다. 예 {"isOk" : true, "msg" : "등록되었습니다."}*/
	$.ajax({
		type : "POST",
		url : jForm.attr("action"),
		data : formData,
		dataType : "json",
		success : function(result) {
			callback(result);
		},
		fail : function() {
			callback({isOk : false, msg : "Error"});
		}
	});
}

$.postJSON = function(url, data, type, func) {
	$.post(url+(url.indexOf("?") == -1 ? "?" : "&")+"callback=?", data, func, type);
};

function loadingAdd(obj) {
	if(obj == "full"){
		$("body").prepend("<div id=\"loadingArea\" class=\"fullLoad\" style=\"z-index:100010\"><img src=\"/images/common/loading.gif\" alt=\"loading...\"></div>");
	} else {
		if($(obj).css("position") != "relative" && $(obj).css("position") != "absolute"){
			$(obj).css("position", "relative");
		}
		$(obj).prepend("<div id=\"loadingArea\"><img src=\"/images/common/loading.gif\" alt=\"loading...\"></div>");
	}
}

function loadingRemove(obj) {
	if(obj != undefined) {
		$(obj).find("#loadingArea").remove();
	} else {
		$("#loadingArea").remove();
	}
}

function shareSNS(type, shareText, shareUrl) {
	var snsUrl = "";
	if (type == "facebook") {
		snsUrl	=	 "http://www.facebook.com/share.php?u=" + encodeURIComponent(shareUrl);
		window.open(snsUrl, '', 'scrollbars=yes,resizable=no,copyhistory=no,width=600,height=400');
	} else if (type == "twitter") {
		snsUrl	=	 "http://twitter.com/intent/tweet?text=" + shareText + "&url=" + encodeURIComponent(shareUrl);
		window.open(snsUrl, '', 'scrollbars=yes,resizable=no,copyhistory=no,width=600,height=400');
	} else if (type == "linkedin") {
		snsUrl	=	 "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(shareUrl) + "&t=" + encodeURIComponent(shareText);
		window.open(snsUrl, '', 'scrollbars=no,resizable=no,copyhistory=no,width=900,height=400');
	} else if (type == "whatsapp") {
		snsUrl	=	 "https://api.whatsapp.com/send?text=" + shareText + " " + encodeURIComponent(shareUrl);
		window.open(snsUrl, '', 'scrollbars=no,resizable=no,copyhistory=no,width=600,height=400');
	} else if (type == "whatsapp_mobile") {
		snsUrl	=	 "https://api.whatsapp.com/send?text=" + shareText + " " + encodeURIComponent(shareUrl);
		window.open(snsUrl, '', 'scrollbars=no,resizable=no,copyhistory=no,width=600,height=400');
	}

}

/**
 *  get City List
 */
function setCityList(countryCd, AccessCountry){
	var cityCdEle	=	$("#cityCd");
	cityCdEle.empty();
	if(countryCd!='0015'){
		cityCdEle.append("<option value=''>Select State/City</option>");
	}else{
		cityCdEle.append("<option value=''>Select State/Province</option>");
	}

	//center init
	var centerEle	=	$("#centerCd");
	centerEle.empty();
	centerEle.append("<option value=''>Select</option>");

	if ( countryCd == ""){
		cityCdEle.prop('selectedIndex', 0);
	} else {
		$.getJSON("/"+AccessCountry+"/customer/getCityList.do?countryCd=" + countryCd, function(result) {
			$.each(result, function (key, entry) {
				cityCdEle.append($('<option></option>').attr('value', entry.cityCd).text(entry.cityName));

				if (typeof cityCd !== "undefined"){
					if ( cityCd == entry.cityCd) {
						$("#cityCd option:nth("+ (key + 1) +")").prop("selected","selected");
					}
				}
			});
		});
	}
}

function setCenterList(countryCd, cityCd, AccessCountry){
	//center init
	var centerEle	=	$("#centerCd");
	centerEle.empty();
	centerEle.append("<option value=''>Select</option>");

	if ( cityCd == ""){
		centerEle.prop('selectedIndex', 0);
	} else {
		$.getJSON("/"+AccessCountry+"/customer/getFrontCenterList.do?country_cd=" + countryCd +"&city_cd=" + cityCd, function(result) {
			$.each(result.centerList, function (key, entry) {
				centerEle.append($('<option></option>').attr('value', entry.centerNo).text(entry.centerName));
			});
		});
	}
}

String.prototype.isPhoneNum = function() {
  //  var format = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	var format = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    return (this.search(format) > -1);
};


/**
 *
 * @param menuCode :
 * @param AccessCountry
 * @param nextUrl : next move url
 * @returns
 */
function accessMenu(menuCode, AccessCountry, nextUrl){
	if (menuCode == ""){
		document.location.href=nextUrl;
		return;
	}
	var params =	{
			code : menuCode
	};

	$.getJSON("/"+AccessCountry+"/insertClickHit.do", params, function(result) {
		$.each(result, function (key, entry) {
		});
	});

	if (typeof nextUrl  !== "undefined"){
		document.location.href=nextUrl;
	}
}

function nevl(str, sDefault) {
	if (str == null || str == undefined || str.trim() == ""  || str == "undefined" || typeof str === "undefined") {
		return sDefault;
	}
	else {
		return str;
	}
}
