
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
	var isFlip = false;

	cardElem.on('click', function(){
		flip();
		
	}); 

	cardElem.on('click', function(){
		flipOut();
		
	}); 

	function flip(){
		if (isFlip) return null;
		cardElem.addClass('rotated');
	};	console.log(`flip:${isFlip}`);

	function flipOut(){	
		if (!isFlip) return null;
		cardElem.removeClass('rotated');
	};  console.log(`flipOut:${isFlip}`);

	cardFront = cardElem.find('.card-front');
	flagArr.forEach(function(element,index){
		cardFront.css('background-image', `url(${flagArr[index]})`);
	});

	cardBack =  cardElem.find('.card-back');
	sightArr.forEach(function(element,index){
		cardBack.css('background-image', `url(${sightArr[index]})`);
	});

})