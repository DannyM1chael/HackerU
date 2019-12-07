$(document).ready(function() {
	var burgerMenu = $('.burgermenu');
	var navMenu = $('.links');

	burgerMenu.on('click', function(){
		navMenu.toggleClass('links-active');
		burgerMenu.find('.line1').toggleClass('toggle1');
		burgerMenu.find('.line2').toggleClass('toggle2');
		burgerMenu.find('.line3').toggleClass('toggle3');
	});

	navMenu.find('li').on('click', function(){
		scrollHandler($(this));
	});

	function scrollHandler(obj){
		$('html').animate({scrollTop:$(`section`).eq(obj.index()).offset().top})};

})