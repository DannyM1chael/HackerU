'use strict';

var addForm = document.querySelector('.addElem');

function addItem() {
    var title = addForm.querySelector('input').value,
        todo = addForm.querySelector('textarea').value,
        errorElem = addForm.querySelector('.error');
    var todoArr = todo.split(',');
    todoArr = todoArr.map((item) => {return item.trim().toLowerCase()});
    todoArr = todoArr.filter((item) => {return item});

    if (title) {
        errorElem.style.display = 'none';
        addTodo(title, todoArr);
    }else {
        errorElem.innerText = 'Fill the First Name';
        errorElem.style.display = 'block';
    }
    
};

function addTodo(todoTitle, todoList) {
    var cardElem = document.createElement('div');
    var titleElem = document.createElement('h2');
    titleElem.innerText = todoTitle;

    if (!todoList.length) {
        ulElem = document.createElement('p');
        ulElem.innerText = 'Everything was done';
    }else{
        var ulElem = document.createElement('ul');
        todoList.forEach((item) => {
            var liElem = document.createElement('li');
            liElem.innerText = item;
            ulElem.appendChild(liElem);
        });
    }
    cardElem.appendChild(titleElem);
    cardElem.appendChild(ulElem);
    document.body.appendChild(cardElem);
}

var addBtn = addForm.querySelector('button');
addBtn.addEventListener('click', () => addItem());