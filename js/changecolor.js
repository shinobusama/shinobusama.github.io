var iconcolor = ["#207f5f","#31db9b","#000","#235e4a","#235e4a","#235e4a","rgb(19, 189, 126)","#072a1b"];
$(document).ready(function() {
	var color2= ["#531010","#e76074","#531010","#932a3a","#932a3a","#bf2729","rgb(207, 66, 66)","#3d0711"];
	var color3 = ["#590b4d","#b61fcb","#53155b","#780b8d","#780b8d","#9429a8","rgb(178, 35, 197)","#3d073c"];
	var color4 = ["#0c2159","#26abf6","#0a1f69","#3c6bb0","#3c6bb0","#3d66a0","rgb(22, 126, 249)","#122149"];
	var color1 = ["#207f5f","#31db9b","#000","#235e4a","#235e4a","#235e4a","rgb(19, 189, 126)","#072a1b"];
	$(".color-li-2").click(function() {
		/* Act on the event */
		$("body").css("background-color",color2[0]);
		$(".menu-button").css("background-color",color2[1]);
		$(".menu-button-inner").css("border","2px solid"+color2[2]);
		$("#menu-outer").css("background-color",color2[3]);
		$("#content-outer").css({"background-color":color2[4],"box-shadow":"0 0 12px"+ color2[5]});
		$(".archive-aside").css("background",color2[7]);
		iconcolor = color2;
		console.log(iconcolor[1]);
	});
	$(".color-li-1").click(function() {
		/* Act on the event */
		$("body").css("background-color",color1[0]);
		$(".menu-button").css("background-color",color1[1]);
		$(".menu-button-inner").css("border","2px solid"+color1[2]);
		$("#menu-outer").css("background-color",color1[3]);
		$("#content-outer").css({"background-color":color1[4],"box-shadow":"0 0 12px"+ color1[5]});
		$(".archive-aside").css("background",color[7]);
		iconcolor = color1;
	});
	$(".color-li-3").click(function() {
		/* Act on the event */
		$("body").css("background-color",color3[0]);
		$(".menu-button").css("background-color",color3[1]);
		$(".menu-button-inner").css("border","2px solid"+color3[2]);
		$("#menu-outer").css("background-color",color3[3]);
		$("#content-outer").css({"background-color":color3[4],"box-shadow":"0 0 12px"+ color3[5]});
		$(".archive-aside").css("background",color3[7]);
		iconcolor = color3;
	});
	$(".color-li-4").click(function() {
		/* Act on the event */
		$("body").css("background-color",color4[0]);
		$(".menu-button").css("background-color",color4[1]);
		$(".menu-button-inner").css("border","2px solid"+color4[2]);
		$("#menu-outer").css("background-color",color4[3]);
		$("#content-outer").css({"background-color":color4[4],"box-shadow":"0 0 12px"+ color4[5]});
		$(".archive-aside").css("background",color4[7]);
		iconcolor = color4;
	});
});