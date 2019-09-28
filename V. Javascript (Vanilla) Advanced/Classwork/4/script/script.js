

// let creature = {
// 	breathe: function() {
// 		console.log('Ffffff')
// 	}
// }

// let animal = {
// 	eat: function() {
// 		console.log('Om-Nom-Nom');		
// 	}
// }

// let dog = {
// 	bark: function() {
// 		console.log('Gaf-gaf');
// 	}
// }

// let rabbit = {
// 	sleep: function() {
// 		console.log('ZzzzzzZ');
// 	}
// }

// animal.__proto__ = creature;
// dog.__proto__ = animal;

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

let cookieBtn = document.getElementById('addCookie');

cookieBtn.addEventListener('click', function(){
	document.cookie = `darkMode=${(getCookie('darkMode')) ? 0 : 1}`;
	setMode();

})

if(getCookie('darkMode')){
	document.querySelector('.content').classList.add('darkMode');

}

function setMode(){
	if (getCookie('darkMode')){
		document.body.classList.add('darkMode');
	}else {
		document.body.classList.remove('darkMode')
	}
}