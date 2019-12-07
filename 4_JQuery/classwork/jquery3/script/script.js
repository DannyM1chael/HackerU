var imagesArr = [
	'https://www.hellride.ru/upload/iblock/530/530baaf15c636ee2668fbc97bd382bb5.jpg',
	'http://pics.livejournal.com/dmkum/pic/000py98f/s640x480',
	'http://i52.fastpic.ru/big/2013/0129/6e/2d71144c6d43efd8bcb4429a683ca36e.jpg',
	'https://www.computerra.ru/wp-content/uploads/2016/04/PodRide-cargo.jpg?x77688'
]


$(document).ready(function(){
	var randomNodeNumber = setRandom($('li'));

	$('li').eq(randomNodeNumber).addClass('activeBtn');
	$('li').eq(randomNodeNumber).find('span').hide();


	$('li').on('click', function(){
		$('li').removeClass('activeBtn');
		$('li span').show();
		var curElem = $(this);
		curElem.addClass('activeBtn');
		curElem.find('span').hide();
		
		$('.result').stop(true);
		$('.result').animate({'opacity': '0', 'width': '0', 'height': '0'}, 
							 1000, 
							 function(){
								$('.result').text(curElem.text());
								$('.result').css('background-image', `url(${imagesArr[$('li').index(curElem)]})`);
								console.log($('.result').css('color'))
							});
		$('.result').animate({'opacity': '1', 'width': '90%', 'height': '500px'}, 1000);
	})
})

function setRandom(list){
	var lastIndex = list.length-1;
	var randValue =  Math.round(lastIndex* Math.random())
	return randValue
}
