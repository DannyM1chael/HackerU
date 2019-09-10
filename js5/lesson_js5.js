// document.getElementById('elemId').style.backgroundColor = 'grey';
// var age = prompt('Сколько тебе лет?')
// document.getElementById('elemId').innerText = `<ul>${age}</ul>`;


// do {
//     var a = prompt('Введи данные')
//     document.getElementById('elemId').innerHTML += `<li>${a}</li>`;
// } while (a != 0);

// var elem = document.getElementById('elemId');

// var pElem = document.createElement('p');
// pElem.innerText = 'Привет';
// elem.appendChild('pElem');

// var elem = document.getElementById('elemId');
// var pic = prompt('Input URL of picture');
// var picElem = document.createElement('img');
// picElem.setAttribute('src',pic);
// elem.appendChild(picElem);

var data = {
    "name": "Vkusvill",
    "employee": [
        {
            "name": "Ivan",
            "lastname": "Ivanov"
        },
        {
            "name": "Sidr",
            "lastname": "Sidorov"
        },
        {
            "name": "Petr",
            "lastname": "Petrov"
        }
    ]
}

var body = document.body;
var hElem = document.createElement('h1');
hElem.innerText = data.name;
body.appendChild(hElem);

for (let i = 0; i < data.employee.length; i++){
    var employeeElem = document.createElement('p');
    employeeElem.innerText = data.employee[i].name + ' ' + data.employee[i].lastname;
    employeeElem.addEventListener('click', function(){this.remove()});
    body.appendChild(employeeElem)
}

// hElem.addEventListener('click', ()=>{console.log('Clicked!')})


