$(document).ready(function () {

	var index = '/index.html';
	var url = window.location.href.split('/');
	var last_item = '/' + url[url.length-1];
	last_item = last_item.replace(/(\?|\#).*/, '');

	if (last_item == index){
	resizeCssIndex();
	}

function resizeCssIndex(){
	$(".coverProjet").css("height", $(".imgProjet").height());
	$(".projet").css("height", $(".imgProjet").height());
}
	var i=1;
	$("#navProgramme"+i).css("border-bottom", "5px solid white");
	function bougerNAV(){
		for (var y=1;y<=5;y++){
		$("#navProgramme"+y).css("border-bottom", "0px solid white");
		$("#section"+y).removeClass("toggleProgramme");
		}
		$("#navProgramme"+i).css("border-bottom", "5px solid white");
		$("#section"+i).toggleClass("toggleProgramme");
	}

$("#navProgramme1").click(function(){
		i=1;
		bougerNAV();
});
$("#navProgramme2").click(function(){
		i=2;
		bougerNAV();
});
$("#navProgramme3").click(function(){
		i=3;
		bougerNAV();
});
$("#navProgramme4").click(function(){
		i=4;
		bougerNAV();
});
$("#navProgramme5").click(function(){
		i=5;
		bougerNAV();
});
window.onresize = function(){
	if (last_item == index){
	resizeCssIndex();
	}
}
window.onload = function(){
	if (last_item == index){
	resizeCssIndex();
	}
}

});