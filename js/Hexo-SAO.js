$(document).ready(function(){
	if(document.cookie.indexOf("SAO")==-1){
	    var t=new Date(new Date().getTime()+1000*60*60);
	    document.cookie="SAO; expires="+t.toGMTString();
	}else{
	    $(".linkstart,.welcome-wrapper,.bgmuisc").remove();
 		$("#content-outer").css({
 			"opacity":"1",
 			"transform":"scaleX(1)"
 		});
	}
	var menuBoolean = false;
 	$(".menu-button,#menu-inner").click(function() {
 		/* Act on the event */
 		if(menuBoolean){
 			$(".menu-button").css({
 				"opacity":"0.5",
 				"transform":"scale(1)"
 			});
 			$("#menu-outer").css(
 				"transform","translate3d(-260px,0,0)"
 			);
 			$(".menu-inner-list").css({
 				"left":"100%",
 				"opacity":"0",
 				"width":"0"
 			});
 			$(".menu-inner-list-li").css({
 				"left":"241px",
 				"opacity":"0",
 				"width":"0"
 			});
 			$(".menu-li-a").css(
 				"opacity","0"
			);
 			$(".menu-icon-li-span").css(
 				"transform","scale(1)"
 			);
 			$(".menu-icon-1").css({
 				"background":"url(../images/home2_normal.png)",
 				"background-size": "32px",
				"background-repeat": "no-repeat",
				 "background-color": iconcolor[6]
 			});
 			$(".menu-icon-2").css({
 				"background":"url(../images/apps4_normal.png)",
 				"background-size": "32px",
				"background-repeat": "no-repeat",
				"background-color": iconcolor[6]
 			});
 			$(".menu-icon-3").css({
 				"background":"url(../images/info_normal.png)",
 				"background-size": "32px",
				"background-repeat": "no-repeat",
				"background-color": iconcolor[6]
 			});
 			$(".menu-icon-4").css({
 				"background":"url(../images/move_normal.png)",
 				"background-size": "32px",
				"background-repeat": "no-repeat",
				"background-color": iconcolor[6]
 			});
 			$(".myCanvas-li").css({
 				"right":"30px",
 				"top": "-12px",
 				"opacity":"0",
 				"transition-delay":"0"
 			});
 			menuBoolean = !menuBoolean;	
 		}else {
 			$(".menu-button").css({
 				"opacity":"0",
 				"transform":"scale(2)"
 			});
 			$("#menu-outer").css({
 				"transform":"translate3d(0,0,0)",
 				"opacity":"1"
 			});
 			$(".menu-inner-list").css({
 				"left":"0",
 				"opacity":"1",
 				"width":"100%"
 			});
 			$(".menu-inner-list-li").css({
 				"left":"1px",
 				"opacity":"1",
 				"width":"240px"
 			});
 			$(".menu-li-a").css(
 				"opacity","1"
			);
 			$(".menu-icon-li-span").css({
 				"transform":"scale(0.6)",
 				"background":"#FFF"
 			});
 			$(".myCanvas-li").css({
 				"right":"30px",
 				"top": "-12px",
 				"opacity":"1",
 				"width":"100%"
 			});
 			menuBoolean = !menuBoolean;	
 		}
 	});
 	$(".link").click(function(){
 		$(".bgmuisc").get(0).play();
 		$(".linkstart").css({
 			"opacity":"0",
 			"z-index":"-1"
 		});
 		// $(".link").css(
 		// 	"transform","scaleX(0)"
 		// );
 		$(".spinner-container").css({
 			"transform":"rotate(720deg)",
 			"animation-play-state":"paused"
 		});
 		$(".welcome-wrapper").css({
 			"opacity":"0",
 			"z-index":"-1"
 		});
 		$(".welcome").css(
 			"transform","scaleX(1)"
 		);
 		$("#content-outer").css({
 			"opacity":"1",
 			"transform":"scaleX(1)"
 		});
 	});
});