$(function(){
	$(".burger").click(function(e){
		e.preventDefault();
		$(".menu").toggleClass("open");
		$(".menu-open").toggleClass("open");
		$(".burger-display").toggleClass("open");
		$(".grandchild-nav-display").toggleClass("open");
		$("header").toggleClass("open");
		$("main").toggleClass("open");
		$("section").toggleClass("open");
		$("footer").toggleClass("open");
	});
});

