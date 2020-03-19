'use strict';

function parseCookie(cookieString){
	let cookieArr = cookieString.split('; ');
	
	return cookieArr.map(function(elem){
		let[key, value] = elem.split('=');
		return {
			key, 
			value: Number(value)}
	})
}

function getCookie(key){
	var cookieArr = parseCookie(document.cookie);
	let curCookie = cookieArr.find(function(elem){
		return elem.key === key
	})

	return (curCookie === undefined || curCookie.value == '0') ? 0 : 1;
}

let cookieBtn = document.getElementById('poorVision');

cookieBtn.addEventListener('click', function(){
	document.cookie = `poorVisionMode=${(getCookie('poorVisionMode')) ? 0 : 1}`;
	setMode();

})

function setMode(){
	if (getCookie('poorVisionMode')){
        document.body.classList.add('poorVisionMode');
	}else {
        document.body.classList.remove('poorVisionMode');
	}
}