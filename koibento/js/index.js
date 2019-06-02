$(document).ready(function(){
	$(function () {
		$('.marquee').marquee({
			duration: 9000
		});
	});
	$("#bar_show").click(function(e){
		$("#menu_none").toggleClass("show-menu-none");
		$("body").addClass("hidden-scroll");
		if($("#uesr_none").hasClass("show-uesr-none")){
			$("#uesr_none").removeClass("show-uesr-none");
		}
		else{
			return false;
		}
		e.stopPropagation();
	});
	$("#close").click(function(){
		$("#menu_none").removeClass("show-menu-none");
		$("body").removeClass("hidden-scroll");
	});
	$("#menu_none").click(function(e){
		e.stopPropagation();
	});
	$(document).click(function(){
		$("#menu_none").removeClass("show-menu-none");
		$("body").removeClass("hidden-scroll");
	});
	$(".user_button").click(function(e){
		$("#uesr_none").toggleClass("show-uesr-none");
		$("body").addClass("hidden-scroll");
		if($("#menu_none").hasClass("show-menu-none")){
			$("#menu_none").removeClass("show-menu-none");		
		}
		else{
			return false;
		}
		e.stopPropagation();
	});
	$("#uesr_none").click(function(e){
		e.stopPropagation();
	});
	$("#close_uesr").click(function(){
		$("#uesr_none").removeClass("show-uesr-none");
		$("body").removeClass("hidden-scroll");
	});
	$(document).click(function(){
		$("#uesr_none").removeClass("show-uesr-none");
		$("body").removeClass("hidden-scroll");
	});
	$(".search_button").click(function(){
		$(".search_fix").addClass("show");
		if($("#menu_none").hasClass("show-menu-none")){
			$("#menu_none").removeClass("show-menu-none");		}
			else{
				return false;
			}
		});
	$(".close_search").click(function(e){
		$(".search_fix").removeClass("show");
	});
	// nav rdw
	// cart end
	$(".login_regiter").click(function(e){
		$(".nav_login").toggleClass("show-nav-login");
		$(".login_regiter span").toggleClass("bg");
		e.stopPropagation();
	});

	$(".nav_login").click(function(e){
		e.stopPropagation();
	});

	$(document).click(function(){
		$(".nav_login").removeClass("show-nav-login");
		$(".login_regiter span").removeClass("bg");
	});
	// user end
	// nav head
});
var owl = $('#koicarosel.owl-carousel');
$('#koicarosel.owl-carousel').owlCarousel({
	loop: true,
	dots: true,
	nav: true,
	autoplay: true,
	margin: 10,
	autoplayTimeout: 5000,
	autoplaySpeed:2000, 
	autoplayHoverPause: true,
	smartSpeed:2000,
	navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
	responsive:{
		0:{
			items:1
		},
		768:{
			items:1
		},
		992:{
			items:1
		},
		1200:{
			items:1
		}
	}
});
$(window).scroll(function(){
	if($(this).scrollTop() > 350){
		$("#goTop").css({"opacity": "0.9" , "pointer-events": "all"});
	}
	else{
		$("#goTop").css({"opacity": "0" , "pointer-events": "none"});
	}
});
$("#goTop").click(function(){
	$("html, body").animate({ scrollTop: 0 }, 1000);
	return false; 
});
$(".tab-content").hide();
$(".tab-content:first").show();
$(".tabs li:first").addClass("active");
$(".tabs li").click(function(){
	$(".tabs li").removeClass("active");
	$(this).addClass("active");
	$(".tab-content").hide();
	var selectored = $(this).find("a").attr("href");
	$(selectored).show();
});
$(".row-picture.lightbox-container").lightweightLightbox();