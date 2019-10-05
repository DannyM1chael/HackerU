
$(document).ready(function() {
	$('#AJAXGetBtn').click(function(){
		var idVal = $('#input-data').val();
		var idValStr = (idVal === '') ? '': `/${idVal}`;
		$('#input-data').val('');

		var methods = {};
		methods['success']      = successHandler;
		methods['error']        = errorHandler;
		methods['beforeSend']   = beforeSendHandler;

		AjaxGet(idValStr, methods);

	})

function singleDataHadler(data){
	var newDoHtml = [ 
					`<div class='do-content'>`,
						`<p>${data.id}</p>`,
						`<h2>${data.title}</h2>`,
						`<p>${data.completed}</p>`,
					`</div>`
					].join('');

	$('.container').html(newDoHtml);

}

function dataHadler(data){
	$('.container').html('');
	data.forEach(function(element, index){
		var newDoHtml = [ 
						`<div class='do-content'>`,
							`<span>${index}</span>`,
							`<h2>${element.title}</h2>`,
							`<p>${element.completed}</p>`,
						`</div>`
						].join('');

		$('.container').append(newDoHtml);	

	});

}

function successHandler(data, textStatus){
	if (Array.isArray(data)){
		dataHandler(data);
	}else{
		singleDataHadler(data);
	}

}

function errorHandler(data, textStatus){
	alert('Такого id нет');				
}

function beforeSendHandler() {
	$('.loadingWindow h1').show().animate({'width' : '100%'}, 500);
	$('.loadingWindow h1').show().animate({'width' : '0%'}, 500);

}



function AjaxGet(idValStr, methods){
	var AjaxGetObj         = {};
	AjaxGetObj['url']      = `https://jsonplaceholder.typicode.com/todos/${idValStr}`;
	AjaxGetObj['dataType'] = 'json';
	for (let key in methods){
		AjaxGetObj[key]    = methods[key];
	}
	$.ajax(AjaxGetObj);

}

})

