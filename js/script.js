$(document).ready(function () {

	var index = '/index.html';
	var url = window.location.href.split('/');
	var last_item = '/' + url[url.length-1];
	last_item = last_item.replace(/(\?|\#).*/, '');

	if (last_item == index){
	resizeCssIndex();
	}
});
function resizeCssIndex(){
	$(".coverProjet").css("height", $(".imgProjet").height());
	$(".projet").css("height", $(".imgProjet").height());
}