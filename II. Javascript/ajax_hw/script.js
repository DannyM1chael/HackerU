
function loadData(userId){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          AJAXHandler(JSON.parse(this.responseText));
    }
  };
  xhttp.open("GET", `https://jsonplaceholder.typicode.com/posts?userId=${userId}`, true);
  xhttp.send();
}

 function loadDataUser(userId){
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
       if (this.readystate == 4 && this.status == 200) {
          AJAXHandlerUser(JSON.parse(this.responseText));
     }
   };
   xhttp.open("GET", `https://jsonplaceholder.typicode.com/users?id=${userId}`, true);
   xhttp.send();
 }

function AJAXHandler(jsonData){
  var contentElem = document.querySelector('.allposts');
  contentElem.innerHTML = "";
  
  for (let i = 0; i<jsonData.length; i++){
    var postElem = document.createElement('div');
    postElem.classList.add('postElem')

    var titleElem = document.createElement('h3');
    var bodyElem = document.createElement('p');

    titleElem.innerText = jsonData[i]["title"];
    bodyElem.innerText = jsonData[i]["body"];
    postElem.appendChild(titleElem);
    postElem.appendChild(bodyElem);
    contentElem.appendChild(postElem);
  };
  
};

function AJAXHandlerUser(jsonData) {
    let tableElem = document.getElementsByClassName('.userData');
    tableElem.innerHTML = "";

    for (let key in jsonData[0]) {
      var trElem = document.createElement('tr');
      var thElem = document.createElement('th');
      var tdElem = document.createElement('td');

      thElem.innerHTML = `${key}:`;
      tdElem.innerHTML = `${jsonData[0][key]}`;

      trElem.appendChild(thElem);
      trElem.appendChild(tdElem);
      tableElem.appendChild(trElem);
    }
};

document.querySelector('.btn').addEventListener('click', function(){
    var inputData = document.querySelector('input').value;
    if (isNaN(inputData) || inputData<0 || inputData>10 || inputData ==''){
      alert('Введите id от 1 до 10');
      return;
    }
    loadDataUser(inputData);
    loadData(inputData);
})