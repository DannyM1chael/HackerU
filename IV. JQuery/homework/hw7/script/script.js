
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

	cardFront = cardElem.find('.card-front');
	cardFront.each(function(index){
		cardFront.eq(index).css('background-image', `url(${flagArr[index]})`);
	});

	cardBack =  cardElem.find('.card-back');
	cardBack.each(function(index){
		cardBack.eq(index).css('background-image', `url(${sightArr[index]})`);
	});

})