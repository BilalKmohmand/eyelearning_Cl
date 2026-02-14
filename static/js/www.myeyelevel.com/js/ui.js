if( window.console == undefined ){ console ={log:function(){}}};
var winHeight = $(window).height();
var winWidth = $(window).width();
var winMedia = 0;

// winMedia

// 1 = 768 ~ 999
// 2 = 1000 ~ 1200
// 3 = 1201 ~ 

$(function(){
	winMediaCheck();
	$(".snsArea .wechat")
	.on("mouseenter", function(e){
		$(this).find("ul").show();
	});
	$(".snsArea .wechat")
	.on("mouseleave", function(e){
		$(this).find("ul").hide(); 
	});
})
$(window).resize(function(){
	winWidth = $(window).width();
	winMediaCheck();
	//console.log($(document).width());
});
function winMediaCheck(){
	if(winWidth < 1000 && winMedia != 1){
		winMedia = 1;
		gnbInit();
		//console.log("mediaNum : " , winMedia, "winWidth : ", winWidth);
	} else if(winWidth >= 1000 && winWidth <= 1200 && winMedia != 2){
		winMedia = 2;
		gnbInit();
		//console.log("mediaNum : " , winMedia, "winWidth : ", winWidth);
	} else if(winWidth > 1200 && winMedia != 3){
		winMedia = 3;
		gnbInit();
		//console.log("mediaNum : " , winMedia, "winWidth : ", winWidth);
	}
}

function gnbInit(){
	var nowActiveNum;
	if(winMedia == 3){
		$("#gnbList > li > a").off("click");
		$("#btnGnbOpen").off("click");
		$("#gnbList > li.on").removeClass("on");
		$("#btnGnbOpen").removeClass("on");
		$("#gnbArea").removeClass("gnbOpen");
		wrapFix('off');
		$("#gnbList > li > a")
		.on("mouseenter", function(){
			var D_parent = $(this).parent();
			if($("#gnbList > li.active").size() > 0){
				$("#gnbList > li.active").addClass("offActive").removeClass("active");
			}
			if(!D_parent.hasClass("on")){
				$("#gnbList > li.on").removeClass("on");		
				D_parent.addClass("on")
			}
		});
		$("#gnbArea")
		.on("mouseleave", function(){
			$("#gnbList > li.on").removeClass("on");
			if($("#gnbList > li.offActive").size() > 0){
				$("#gnbList > li.offActive").addClass("active").removeClass("offActive");
			}
		});
	} else {
		gnbReset();
		$("#gnbList > li > a").on("click", function(e){
			var D_parent = $(this).parent();
			if($("#gnbList > li.active").size() > 0){
				$("#gnbList > li.active").addClass("offActive on").removeClass("active");
			}
			if(D_parent.hasClass("hasSub")){
				if(!D_parent.hasClass("on")){
					$("#gnbList > li.on").removeClass("on");		
					D_parent.addClass("on")
				} else {
					$("#gnbList > li.on").removeClass("on");		
				}
				e.preventDefault();
			}
		});
		$("#btnGnbOpen").on("click", function(e){
			$("#gnbList > li.on").removeClass("on");	
			if($("#gnbList > li.offActive").size() > 0){
				$("#gnbList > li.offActive").addClass("active").removeClass("offActive");
			}
			if(!$(this).hasClass("on")){
				$(this).addClass("on");
				$("#gnbArea").addClass("gnbOpen");
				wrapFix('on');
			} else {
				$(this).removeClass("on");
				$("#gnbArea").removeClass("gnbOpen");
				wrapFix('off');
			}
			e.preventDefault(); 
		})
	}
}

function gnbReset(){
	$("#gnbList > li > a").off("click");
	$("#btnGnbOpen").off("click");
	$("#gnbList > li.on").removeClass("on");
	$("#btnGnbOpen").removeClass("on");
	$("#gnbArea").removeClass("gnbOpen");
	wrapFix('off');
	$("#gnbList > li > a").off("mouseenter");
	$("#gnbArea").off("mouseleave");
}


function wrapFix(txt){ 
	//console.log("wrapFix : " + txt);
	if(txt == "on"){
		$("body").css({
			"overflow" : "hidden"
		});
	} else if(txt == "off"){
		$("body").css({
			"overflow" : "visible"     
		});
	}
}

browser = (function(){
	var a = navigator.userAgent.toLowerCase();
	var b,v;
	if(a.indexOf("safari/") > -1) {
		b = "safari";
		var s = a.indexOf("version/");
		var l = a.indexOf(" ", s);
		v = a.substring(s+8, l);
	}
	if(a.indexOf("chrome/") > -1) {
		b = "chrome";
		var ver = /[ \/]([\w.]+)/.exec(a)||[];
		v = ver[1];
	}
	if(a.indexOf("firefox/") > -1) {
		b = "firefox";
		var ver = /(?:.*? rv:([\w.]+)|)/.exec(a)||[];
		v = ver[1];
	}
	if(a.indexOf("opera/") > -1) {
		b = "opera";
		var ver = /(?:.*version|)[ \/]([\w.]+)/.exec(a)||[];
		v = ver[1];
	}
	if((a.indexOf("msie") > -1) || (a.indexOf(".net") > -1)) {
		b = "msie";
		var ver = /(?:.*? rv:([\w.]+))?/.exec(a)||[];
		if(ver[1])
		 v = ver[1];
		else{
		 var s = a.indexOf("msie");
		 var l = a.indexOf(".", s);
		 v = a.substring(s+4, l);
	 }
}
return { name: b || "", version: v || 0};
}()); 


window.uiUtil= 
{
	imgReplace : function imgReplace(obj, before, after) {
		obj.attr("src", function(){
			return $(this).attr("src").replace(before, after);
		});
	}
	
	, scorllMove : function scorllMove(obj, speed, easing, gap, afterFunc) {
		if(speed == null || speed == ""){ speed = 500; };
		if(easing == null || easing == ""){ easing = "easeInOutQuint"; }; 
		if(gap == null || gap == ""){ gap = 0; }; 
		var offset = $(obj).offset();
		var topValue = 0;
		if(offset.top != 0){
			topValue = offset.top; 
		} else {
			topValue = offset.top;
		}
		$("html, body").stop().animate({
			scrollTop : topValue - gap  
		},speed, easing, function(){
			if(afterFunc){
				afterFunc();
			}
		});
	}
	
	, setCookie : function setCookie( name, value, expiredays){
		if(expiredays == null || expiredays == ""){ expiredays = 1; };
		var todayDate = new Date();
	    todayDate.setDate( todayDate.getDate() + expiredays );
	    document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";";
	}
	
	,getCookie : function getCookie( name ) {
		var nameOfCookie = name + "=";
		var x = 0;
		while( x <= document.cookie.length ){
     	var y = (x+nameOfCookie.length);
     	if ( document.cookie.substring( x, y ) == nameOfCookie ) {
          	if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
            	endOfCookie = document.cookie.length;
           	return unescape( document.cookie.substring( y, endOfCookie ) );
     	}
     	x = document.cookie.indexOf( " ", x ) + 1;
     	if ( x == 0 )  break;
		}// - while
		return "";
	}
	
	,chkAll : function checkAll(all, chks){
		var $chkAll = $(all);
		var $chkOther = $(chks);
		$chkAll.change(function(){
			var chkAllState = $(this).prop("checked");
			$chkOther.prop("checked", chkAllState).change(); 
			if(chkAllState){
				$chkOther.parent().addClass("on");
			} else {
				$chkOther.parent().removeClass("on");
			}
		});
		$chkOther.change(function(){
			var chkVal = true;
			var allCheckState = true;
			$chkOther.each(function(){
				if(!$(this).prop("checked")){
					chkVal = false;	
				}
			});
			$chkOther.not(this).each(function(){
				if(!$(this).prop("checked")){
					allCheckState = false;	 
				}
			});
			$chkAll.prop("checked", chkVal);   
			if(chkVal) {
				$chkAll.parent().addClass("on");
			} else {
				$chkAll.parent().removeClass("on");
				if(allCheckState) {
					$chkOther.prop("checked", false);
					$chkOther.parent().removeClass("on");
					$(this).prop("checked", true);
					$(this).parent().addClass("on");				
				}
			}
		});
	}
	
	,chkClear : function chkClear(obj){
		$(obj).prop("checked", false);
	} 
	
	// arry : 이미지 경로가 들어간 배열 ex) arry["/images/a.jpg", "/images/b.jpg", "/images/c.jpg"]
	/*,imgPreLoad : function imgPreLoad( arry ) {
	    if (!arry) return;
	    var arr = new Array();
	    for(var i=0; i < arry.length; i++){                          
	      arr[i] = new Image(); 
	      arr[i].src = arry[i];
	    }
	}*/
	
	,imgPreLoad : function imgPreLoad( arry, callback ) {
		var count = arry.length;
	    if(count === 0 && callback) {
    		callback();
	    }
	    var loaded = 0;
	    $(arry).each(function() {
	        $('<img>').attr('src', this).load(function() {
	            loaded++;
	            if (loaded === count && callback) {
	                callback();
	            }
	        });
	    });
	}
	
	,numberWithComma : function numberWithComma(x) { 
		var x = String(x);
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	 
	,tabInit : function tabInit(tabName, other){
		var tab = $(tabName);
		var parent = $(tabName).parent();
		$(tabName).find("a").click(function(e){
			if(!$(this).parent().hasClass("on")){
				var target = $(this).attr("href");
				$(tabName).find(".on").removeClass("on");
				$(this).parent().addClass("on");
				parent.find(other).hide();
				$(target).show();
			}
			e.preventDefault();
		});
	}
	
	,otherClickLayerHide : function otherClickLayerHide(obj){
		$(document).on("click keyup", function(e) {
			if(obj.is(":visible")){
				if(!($(e.target).parents(".otherClickHideArea").length)){
					obj.hide();
					$(document).off("click keyup");
				}
			}
		});
	} 
}; 


window.uiDesign= 
{
	btnJsutfy : function btnJsutfy(obj) {
		var $obj = $(obj).find(".btnJustfy");
		var $btn = $obj.find(".btn");
		var num = $btn.size();
		var width = $obj.width();
		var empayNum = ((num - 1) * 14);
		$btn.not($btn.eq(0)).css({"margin-left" : empayNum / (num - 1) + "px"});
		$btn.css({"width" : Math.floor((width - empayNum) / num)});
	},
	 
	showHide : function showHide(obj, state, effect, func){
		var effect = effect;
		if(!effect) {
			var effect = "default";  
		}
		if(!func) {
			var func = function(){}  
		}
		if(state !== "show" && state !== "hide"){
			alert("state error!");
			return false; 
		}	
		switch (effect){
			case "fade" :
				switch (state){
					case "show" : $(obj).fadeIn("slow", function(){ func(); });
					break;
					case "hide" : $(obj).fadeOut();
					break;			
				}
			break;
			
			case "drop" :
				switch (state){
					case "show" : $(obj).slideDown();
					break;
					case "hide" : $(obj).slideUp();
					break;			
				}
			break;
			
			default : 
				switch (state){
					case "show" : $(obj).show();
					break;
					case "hide" : $(obj).hide();
					break;			
				}
		}
	},
	
	listSort : function listSort(obj, section){
		var $obj = $(obj);
		var $objWidth = $obj.width();
		var $section = $(obj).find(section);
		var $sectionWidth = $section.width();
		var lineNum = Math.floor($objWidth / $sectionWidth);
		var diviW = Math.floor($objWidth / lineNum);
		var diviRest = ($objWidth % lineNum) / 2;
		var empty = (diviW - $sectionWidth) / 2;
		var objHeight = 0;
		var nowHeight = 0;
		
		if($section.size() <= 0) {
			$obj.css("height", "auto");
			return false;
		}
		
		$section.each(function(i){
			var idx = i + 1;
			var posLeft = 0;
			var posTop= 0;
			var imsi = "";
			if( Math.floor(idx / lineNum) == 0 || (idx / lineNum) == 1) {
				posLeft = ((idx-1) * diviW) + empty;
				$(this).addClass("sort");
				$(this).css({
					"top" : "0px",
					"left" : posLeft + "px" 
				});
			} else {
				$obj.find(".sort").each(function(i){
					if(posTop == 0 || posTop > ($(this).height() + parseInt($(this).css("top"),10))) {
						posTop = $(this).height() + parseInt($(this).css("top"));
						posLeft = parseInt($(this).css("left"),10);
						imsi = $(this);
					}
				});
				imsi.removeClass("sort").addClass("comp");
				$(this).addClass("sort");
				$(this).css({
					"top" : posTop + (empty * 2) + "px",
					"left" : posLeft + "px"
				});
			}
			nowHeight = $(this).height() + parseInt($(this).css("top"));
			if(objHeight < nowHeight){
				objHeight = nowHeight;
				$obj.css("height", objHeight + "px");
			}
		}); 
	},
	
	inLabel : function inLabel(){
		$(".inLabel input[type=text]")
		.add(".inLabel input[type=serach]")
		.add(".inLabel input[type=email]")
		.add(".inLabel input[type=password]")
		.add(".inLabel input[type=file]")
		.focusin(function(){
			$(this).parents(".inLabel").addClass("focus");
		})
		.focusout(function(){
			if($(this).val() == ""){
				$(this).parents(".inLabel").removeClass("focus");
			}  
		})
		.change(function(){
			if($(this).val() != ""){
				$(this).parents(".inLabel").addClass("focus");
			} else {
				$(this).parents(".inLabel").removeClass("focus");
			}
		});
	},
	
	inChk : function inChk(){
		$(".inChk input").change(function(){
			var name = $(this).attr("name");
			$(".inChk input[name="+name+"]").each(function(){
				var prop = $(this).prop("checked");
				var $wrap = $(this).parent(".inChk");
				if(prop){
					$wrap.addClass("on");
				} else {
					$wrap.removeClass("on");  
				}
			});
		});
	},
	
	fileDesign : function fileDesign(obj){
		var $obj = $(obj);
		$obj.find("input[type=file]").change(function(){
			console.log($(this).val().replace(/^c:\\fakepath\\/i, ''))
			$(this).parent().find(".fileTxt").text($(this).val().replace(/^c:\\fakepath\\/i, ''));
		});
	}
};

/*
var opt = {
    img: $('#userPic')
};
$('#btnPicUpload').setPreview(opt);
*/

$.fn.setPreview = function(opt){
	var defaultOpt = {
	    inputFile: $(this),
	    img: null,
	    w: 150,
	    h: 150
	};
	$.extend(defaultOpt, opt);
	var previewImage = function(){
	    if (!defaultOpt.inputFile || !defaultOpt.img) return;
	    var inputFile = defaultOpt.inputFile.get(0);
	    var img       = defaultOpt.img.get(0);
	
	    // FileReader
	    if (window.FileReader) {
	    	// image 파일만
	        if (!inputFile.files[0].type.match(/image\//)) return;
	
	        // preview
	        try {
	            var reader = new FileReader();
	            reader.onload = function(e){
	                img.src = e.target.result;
	                if(opt.w) {
	                	img.style.width  = defaultOpt.w+'px';
	                }
	                if(opt.h) {
	                	img.style.height = defaultOpt.h+'px';
	                }
	                img.style.display = '';
	            }
	            reader.readAsDataURL(inputFile.files[0]);
	        } catch (e) {
	        	console.log(e);
	            // exception...
	        }
	    // img.filters (MSIE)
	    } else if (img.filters) {
	    	defaultOpt.img.attr('src', '/images/common/blank.png');
	    	defaultOpt.img.attr('alt', '');
	        inputFile.select();
	        inputFile.blur();
	        var imgSrc = document.selection.createRange().text;
	        if(opt.w) {
	        	img.style.width  = defaultOpt.w+'px';
	        }
	        if(opt.h) {
	        	img.style.height = defaultOpt.h+'px';
	        }
	
	        //img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale')";
	        //img.filters("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
	        img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale',src=\""+imgSrc+"\")";
	        
		}
	};
	// onchange
	$(this).change(function(){
	    previewImage();
	});
};
 
$.fn.scrollEvent = function(opt){
    var defaultOpt = {
        id : null,
        func : null
    };
    $.extend(defaultOpt, opt);
    
    var elem = document.getElementById(defaultOpt.id);
    if (elem.addEventListener) {    // all browsers except IE before version 9
        // Internet Explorer, Opera, Google Chrome and Safari
        elem.addEventListener ("mousewheel", MouseWheelHandler, false);
        // Firefox
        elem.addEventListener ("DOMMouseScroll", MouseWheelHandler, false);
    }else{
        if (elem.attachEvent) { // IE before version 9
            elem.attachEvent ("onmousewheel", MouseWheelHandler);
        }
    }   
    
    function MouseWheelHandler() {
        var nDelta = 0;
        if (!event) { event = window.event; }
        // cross-bowser handling of eventdata to boil-down delta (+1 or -1)
        if ( event.wheelDelta ) { // IE and Opera
            nDelta= event.wheelDelta;
            if ( window.opera ) {  // Opera has the values reversed
                nDelta= -nDelta;
            }
        }
        else if (event.detail) { // Mozilla FireFox
            nDelta= -event.detail;
        }
        if (nDelta > 0) {
        	defaultOpt.func('up');
        }
        if (nDelta < 0) {
        	defaultOpt.func('down');
        }
        if ( event.preventDefault ) {  // Mozilla FireFox
            event.preventDefault();
        }
        event.returnValue = false;  // cancel default action
   }
}

function pageTitInit(txt){
	//var nowTit = $(document).attr("title");
	//$(document).attr("title", txt + " < " + nowTit);
}

function imgSort(obj){
	var $obj = $(obj);
	//console.log($obj.find(".thum").size());
	$obj.find(".thum").each(function(){
		var $parent  = $(this);
		var $img = $(this).find("img");
		$img.load(function(){
			var imgWidth = $(this).width();
			var imgHeight = $(this).height();
			
			if($parent.width() > imgWidth && $parent.height() > imgHeight){
				$(this).addClass("imgVm");
			}
			if(imgWidth < imgHeight){
				$(this).css({
					"position" : "absolute",
					"left" : "0",
					"top" : "50%",
					"margin-top" : - (imgHeight / 2) + "px"
				});
			} else if(imgWidth > imgHeight){
				$(this).css({
					"max-width" : "none",
					"height" : "100%"
				});
				imgWidth = $(this).width();
				imgHeight = $(this).height();
				$(this).css({
					"position" : "absolute",
					"left" : "50%",
					"top" : "0",
					"margin-left" : - (imgWidth / 2) + "px" 
				});
			}
		});
	})
}


var Layer = {
	open : function open(src, height, width, btnClose) {
		if($("#blockArea").size() > 0){
			$("#blockArea").remove();
		}
		var widthSize = "90%";
		var heightSize = "95%";
		
		$("#wrapper").append('<div id="blockArea"><div><div id="frameArea" style="width:'+ widthSize +'; height:'+ heightSize +'"><div id="frameCont"></div></div></div></div>');
		var temp = '<iframe src="' + src + '" width="100%" height="100%" frameborder="0" allowTransparency="true" name="iframetPopLayer1" id="iframetPopLayer1" scrolling="no"></iframe>';
						//+ '<a href="#" class="btnLayerClose" onclick="Layer.close(); return false;"><img src="/images/btn/btn_close3.png" alt="닫기" width="30" class="imgVm"></a>';
		wrapFix('on');
		$("#frameCont").html(temp);
		if(btnClose){
			$("#frameCont").append('<a href="#" onclick="top.Layer.close(); return false;" class="btnLayerClose closeTypeB">닫기</a>');
		}
		
		if(height != null && height != undefined && height != "") {
			top.$("#frameArea").height(height);
			top.$("#frameArea").css("opacity", "1");
		}
		if(width != null && width!= undefined && width != "") {
			top.$("#frameArea").width(width); 
			top.$("#frameArea").css("opacity", "1");
		}
	},
	close : function close() {
		top.$("#blockArea").remove();
		wrapFix('off');
	} 
};

function setHeight(){
	$("#popWrap").imagesLoaded( function() {
		var popWidth = $("#popWrap").width(); 
		top.$("#frameArea").width($("#popWrap").width() + 60); 
		var popHeight = $("body").height();
		var maxHeight = top.$("#frameArea").height();
		top.$("#iframetPopLayer1").attr("height",popHeight + "px");
		//console.log(popHeight);
		if(popHeight > maxHeight){
			popHeight = maxHeight
		}
		top.$("#frameArea").height(popHeight); 
		top.$("#frameArea").css("opacity", "1"); 
	});
}

function contFix(){
	var fixSize = winWidth;
	if(winWidth > winHeight){
		fixSize = winHeight;
	}
	$("#contFix").width(fixSize - 30);
}


function privacyPolicy(AccessCountry){
	location.href="/"+ AccessCountry +"/footer/privacy-policy.do";
}

function activeScroll(nav){
	var sectionPos = new Array();
	var D_nav = $(nav);
	var D_navs = $(nav).find("li");
	var gab = 100;
	
	var init = function(){
		var scrollTop = $(window).scrollTop();
		D_navs.each(function(i){
			var D_target = $($(this).find("a").attr("href"));
			var targetOffset = D_target.offset(); 
			sectionPos[i] = targetOffset.top - gab; 
		});
		scrollEvent();
		linkActive();
		sectionFocus(scrollTop);
	};
	
	var scrollEvent = function(){
		$(window).on("scroll", function(){
			var scrollTop = $(this).scrollTop();
			sectionFocus(scrollTop);
		}); 
	}
	
	var sectionFocus = function(scrollTop){
		var cnt = -1;
		for(var i = 0; i < sectionPos.length; i++) {
			if(sectionPos[i] <= scrollTop) {
				cnt = cnt + 1; 
			} 
		} 
		//console.log(cnt);
		if(cnt > -1 && !D_nav.hasClass("on")) {
			D_nav.addClass("on");
		} else if(cnt <= -1 && D_nav.hasClass("on")) {
			D_nav.removeClass("on"); 
		}
		if(!D_navs.eq(cnt).hasClass("on")) {
			D_navs.removeClass("on");
			D_navs.eq(cnt).addClass("on")	
		}	
	}
	
	var linkActive = function(){
		D_navs.find("a").on("click", function(e){
			var idx = $(this).parent().index();
			$("html, body").stop().animate({
				scrollTop : sectionPos[idx]
			}, 500);
			e.preventDefault();
		});  
	}
	init();
};

function learningTabInit(txt){
	$(".learningTab li a").on("click", function(e){
		var D_parents = $(this).parents(".section");
		var D_target = $($(this).attr("href"));
		D_parents.find(".tabCont:visible").hide();
		D_target.show();
		D_parents.find(".learningTab li.on").removeClass("on");
		$(this).parent().addClass("on");
		if(txt == "top") {
			uiUtil.scorllMove(D_target, '', '', 130)
		}
		e.preventDefault();
	});
}

function nationSelect(){
	$('.nationSelect strong a').on('click', function(e){
		var D_target = $('.nationSelect .list');
		if(D_target.is(":visible")){
			D_target.hide();
		} else {
			D_target.show();
			uiUtil.otherClickLayerHide($(".nationSelect .list"));
		}
		e.preventDefault();
	});	
}

function selectCountry(AccessCountry, countryName, menu) {
	document.location.href= "/"+AccessCountry+"/global-events/" + menu + "/introduction.do?country=" + countryName;
} 

function wechatShow(obj){
	var D_this = $(obj);
	var D_target = $(obj).parent().find("ul");
	if(D_target.is(":hidden")){
		D_target.show();
		uiUtil.otherClickLayerHide(D_target);
	} else {
		D_target.hide(); 
	}
}

function youtubeInner(obj, id){
	var url = 'https://www.youtube.com/embed/' + id + '?version=3&autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0&disablekb=1';
	var temp = '<iframe width="100%" src="'+ url +'" frameborder="0" allowfullscreen id="youtubeFrame"></iframe>';
	obj.html(temp);
}

function youtubePopup(id){
	var url = 'https://www.youtube.com/embed/' + id + '?version=3&autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0&disablekb=1';
	var temp = '<iframe width="100%" height="100%" src="'+ url +'" frameborder="0" allowfullscreen id="youtubeFullFrame"></iframe>'
				+ '<a href="#" class="btnLayerClose" onclick="Layer.close(); return false;"><img src="/images/btn/btn_close2.png" alt="닫기" width="14" class="imgVm"></a>';
	
	$("#wrapper").append('<div id="blockArea">'+ temp +'</div>');
	
	$("#subFloating").hide();
}