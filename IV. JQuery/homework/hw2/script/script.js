var imageArr = [
	'img/racoons1.jpg',
	'img/racoons2.jpg',
	'img/racoons3.jpg',
	'img/racoons4.jpg'
]

$(document).ready(function(){
	$('li').on('click',function(){
		$(this).css('background-image', `url(${imageArr[$('li').index(this)]})`);

		var curImg = $(this);
		$('.main_content').stop(true).animate({'opacity': '0', 'width': '0', 'height': '0'}, 500,
			function(){
				$('.main_content').css('background-image', `url(${imageArr[$('li').index(curImg)]})`);
			});
		$('.main_content').animate({'opacity': '1', 'width': '50%', 'height': '400px'}, 500);
	})

})