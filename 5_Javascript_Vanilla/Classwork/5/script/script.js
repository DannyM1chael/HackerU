"use strict";

function getData(){
	let key = document.getElementById('key').value;
	let value = document.getElementById('value').value;
	return {key, value}
} 


function addHandler(){
	var data = getData();
	localStorage.setItem(data.key, data.value);
	updateData();

}

function updateData(){
	let List = document.getElementById('list');
	list.innerText = '';

	for (let i = 0; i < localStorage.length; i++) {
		let key = localStorage.key(i);
		let value = localStorage.getItem(key);

		let keyNode = document.createElement('span');
		let valueNode = document.createElement('span');
		let liNode = document.createElement('li');

		liNode.appendChild(keyNode);
		liNode.appendChild(valueNode);
		list.appendChild(liNode);

		keyNode.innerText = key;
		valueNode.innerText = value;
	}
}

var addData = document.getElementById('addData')
addData.addEventListener('click', function(){addHandler()})

