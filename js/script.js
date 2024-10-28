// JavaScript Document
$(document).ready(function() {

	$(".navbar-toggler").click(function () {
		$("html").addClass("overflow-hidden");
		$(".nav-mobile-open-overlay").addClass("show");
	});
	$(".btn-nav-close").click(function () {
		$("html").removeClass("overflow-hidden");
		$(".nav-mobile-open-overlay").removeClass("show");
		$(".navbar-collapse").removeClass("show");
	});
	$(".nav-mobile-open-overlay").click(function () {
		$("html").removeClass("overflow-hidden");
		$(".nav-mobile-open-overlay").removeClass("show");
		$(".navbar-collapse").removeClass("show");
	});
	$(".navbar-nav .nav-link").click(function(){
		$("html").removeClass("overflow-hidden");
		$(".nav-mobile-open-overlay").removeClass("show");
		$(".navbar-collapse").removeClass("show");
	});
	$(".upgrad-pro-right").click(function(){
		$("html").removeClass("overflow-hidden");
		$(".nav-mobile-open-overlay").removeClass("show");
		$(".navbar-collapse").removeClass("show");
	});

	$('.chart').easyPieChart({
		size: 52,
		barColor: "#FFFFFF",
		scaleLength: 0,
		lineWidth: 4,
		trackColor: $(this).data('track-color'),
		lineCap: "circle",
		animate: 1000,
	});


	// OFI Browser
	objectFitImages();
});
