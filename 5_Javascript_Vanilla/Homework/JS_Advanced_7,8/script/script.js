'use strict';

let imageArr =[
    'img/headphones.jpg',
    'img/guitar_bass.jpg',
    'img/vinyl.jpg'
]

let rootElem = document.getElementById('root');

createGallery();

function createGallery(){
    let divList = document.createElement('div');
    divList.classList.add('imgSidebar');
    let mainDiv = document.createElement('div');
    mainDiv.classList.add('imgZoom');

    imageArr.forEach(elem => {
        addImage(divList, elem);
    })

    rootElem.appendChild(divList);
    rootElem.appendChild(mainDiv);

}

function addImage(divList, elem){
    let imgContainer = document.createElement('div');
    imgContainer.style.backgroundImage = `url('${elem}')`;
    imgContainer.addEventListener('click', changeImage)

    divList.appendChild(imgContainer);
}

function changeImage(){
    let elem = this.style.backgroundImage;
    let imgZoom = document.querySelector('.imgZoom');
    imgZoom.innerHTML ='';
    let divElem = document.createElement('div');
    divElem.style.backgroundImage = `${elem}`;

    
    divElem.addEventListener('mousemove', function(event){
        zoomHandler(event, this)
    });
    divElem.addEventListener('mouseout', function(event){
        this.style.backgroundSize = 'cover';
        this.style.backgroundPosition = 'center';
    });

    imgZoom.appendChild(divElem);
}

function zoomHandler(event, elem){
    let x = event.offsetX/elem.offsetWidth;
    let y = event.offsetY/elem.offsetHeight;
    elem.style.backgroundSize = '250%';
    elem.style.backgroundPosition = `${Math.round(x*100)}% ${Math.round(y*100)}%`;
}
