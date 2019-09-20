var imageArr = ['https://blog.eduonix.com/wp-content/uploads/2018/09/Full-Stack-Developer.jpg',
				'https://i.pinimg.com/originals/2f/96/cc/2f96cc51a2c5e1674291d53917c3e5a6.jpg',
				'https://codecondo.com/wp-content/uploads/2017/09/Full-Stack-Developer-Package.jpg',
				'https://www.pngkit.com/png/detail/310-3104250_related-wallpapers-full-stack-developer-png.png'
]




$(document).ready(function(){
	var randomNodeNumber = setRandom($('li'));

	$('li').eq(randomNodeNumber).addClass('activeBtn');
	$('li').eq(randomNodeNumber).find('span').hide();

	$('li').on('click',function(){
		$('li').removeClass('activeBtn');
		$('li span').show();

		var curElem = $(this);
		curElem.addClass('activeBtn');
		curElem.find('span').hide();

		$('.result').stop(true).animate({'opacity': '0', 'width': '0', 'height': '0'}, 500, 
			function(){
				$('.result').text(curElem.text());
				$('.result').css('background-image',`url(${imageArr[$('li').index(curElem)]})`);
				});

		$('.result').animate({'opacity': '1', 'width': '90%', 'height': '500px'}, 500);

	})
})

function setRandom(list){
	var lastIndex = list.length-1;
	var randValue = Math.round(lastIndex * Math.random());
	return randValue

}