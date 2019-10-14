
var flagArr  = [
				'https://wallpapercave.com/wp/N9drw3k.jpg',
				'https://wallpapercave.com/wp/wp4211279.jpg',
				'https://wallpapercave.com/wp/wp2362739.jpg',
				'https://wallpapercave.com/wp/wp4034159.jpg',
				'https://wallpapercave.com/wp/wp4213327.jpg',
				'https://wallpapercave.com/wp/wp1958683.jpg',
				'https://wallpapercave.com/wp/wp1903233.jpg',
				'https://wallpapercave.com/wp/wp4216160.jpg'
				];

var sightArr = [
				'https://wallpapercave.com/wp/wp2530917.jpg',
				'https://wallpapercave.com/wp/wp4098813.jpg',
				'https://wallpapercave.com/wp/wp1833702.jpg',
				'https://wallpapercave.com/wp/qfuxkVz.jpg',
				'https://wallpapercave.com/wp/wp1839886.jpg',
				'https://wallpapercave.com/wp/wp2242975.jpg',
				'https://wallpapercave.com/wp/wp3988257.jpg',
				'https://wallpapercave.com/wp/wp1835743.jpg'
				];

$(document).ready(function(){
	var cardElem = $('.card');

	cardElem.on('click', function(){
		$(this).toggleClass('rotated');
		$(this).siblings().removeClass('rotated');
		
	}); 

	cardFront = cardElem.find('.card-front');
	cardFront.each(function(index){
		cardFront.eq(index).css('background-image', `url(${flagArr[index]})`);
	});

	cardBack =  cardElem.find('.card-back');
	cardBack.each(function(index){
		cardBack.eq(index).css('background-image', `url(${sightArr[index]})`);
	});

})