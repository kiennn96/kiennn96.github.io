$(document).ready(function() {
	$(".btn_nav_bar").click(function(){
		$(".nav.header").fadeToggle();
	});
	$(window).scroll(function(){
		if($(this).scrollTop() > 300){
			$(".menu").addClass("sticky");
		}
		else{
			$(".menu").removeClass("sticky");
		}
	});
	$(window).scroll(function(){
		if($(this).scrollTop() > 300){
			$('#goTop').css({"opacity":"0.8", "pointer-events":"all"});
		}
		else{
			$('#goTop').css({"opacity":"0", "pointer-events":"none"});
		}
	});
	$("#goTop").click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1000);
		return false; 
	});
});