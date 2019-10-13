
var flagArr  = [
				'img/france.jpg',
				'img/iceland.jpg',
				'img/israel.jpg',
				'img/nepal.jpg',
				'img/netherlands.jpg',
				'img/portugal.jpg',
				'img/russia.jpg',
				'img/vietnam.jpg'
				];

var sightArr = [
				'img/paris.jpg',
				'img/volcano.jpg',
				'img/jerusalim.jpg',
				'img/everest.jpg',
				'img/tulips.jpg',
				'img/pena.jpg',
				'img/moscow.jpg',
				'img/halong.jpg'
				];

$(document).ready(function(){
	var cardElem = $('.card');

	cardElem.on('click', function(){
		$(this).toggleClass('rotated');
		
	}); 

	cardFrontElem = cardElem.find('.card-front');
	flagArr.forEach(function(){
		cardFrontElem.css('background-image', `url(${flagArr[0]})`);
	}); 

	cardBack =  cardElem.find('.card-back');
	sightArr.forEach(function(){
		cardBack.css('background-image', `url(${sightArr[0]})`);
	});

})