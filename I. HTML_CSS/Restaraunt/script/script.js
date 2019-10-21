$(document).ready(function() {
	var burgerMenu = $('.burger');
	var nav = $('.navigation');
	var innerMenu = $('.burger-inner');

	burgerMenu.on('click', function(){
		innerMenu.toggleClass('active');
		burgerMenu.find('.line1').toggleClass('toggle1');
		burgerMenu.find('.line2').toggleClass('toggle2');
		burgerMenu.find('.line3').toggleClass('toggle3');
	});
})