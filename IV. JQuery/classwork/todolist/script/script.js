$(document).ready(function() {
	var todo = $('.container')

	todo.find('.addBtn').on('click', function(){
		var data = getContent();
		todo.find('.deals').append(createDeal(data));

		var allDeals = todo.find('.deals .deal');
		var allDealsLength = allDeals.length;
		var curDeal  = allDeals.eq(allDealsLength-1);
		console.log(curDeal);

		curDeal.find('.close').on('click', function(){
			$(this).parent('.deal').remove()

		});

		curDeal.find('.confirm').on('click', function(){
			$(this).parent('.deal').css('background-color', 'green')
		});

	})

	function getContent(){
		var header  = todo.find('.header-content').val();
		var content = todo.find('.text-content').val();
		
		return{header,content}
	}

	function createDeal(data){
		var newDo = [`<div class='deal'>`,
						 `<span class='close'>x</span>`,
						 `<span class='confirm'>v</span>`,
						 `<h2>${data.header}</h2>`,
						 `<p>${data.content}</p>`,
			 		`</div>`].join('');
		return newDo

	}


})