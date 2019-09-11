
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

    var titleElem = document.createElement('title');
    var bodyElem = document.createElement('body');

    titleElem.innerText = jsonData[i]["title"];
    bodyElem.innerText = jsonData[i]["body"];
    postElem.appendChild(titleElem);
    postElem.appendChild(bodyElem);
    contentElem.appendChild(postElem);
  }
  
}

function AJAXHandlerUser(jsonData) {
    userDataElem = document.getElementsByClassName('.userData');
    userDataElem.innerHTML = "";

}

function buttonHandler(){
    var inputData = document.querySelector('input').value;
    loadData(inputData);
}

document.querySelector('.btn').addEventListener('click', function(){buttonHandler();})