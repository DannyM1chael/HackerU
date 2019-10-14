$(document).ready(function() {
	var burgerMenu = $('.burgermenu');
	var navMenu = $('.links');

	burgerMenu.on('click', function(){
		navMenu.toggleClass('links-active');

	})

	burgerMenu.find('div .line1').on('click',function(){
		$(this).toggleClass('toggle');

	})

	navMenu.find('li').on('click', function(){
		scrollHandler($(this));
	})

	function scrollHandler(obj){
		$('html').animate({scrollTop:$('.page4').eq(obj.index()).offset().top})};

})