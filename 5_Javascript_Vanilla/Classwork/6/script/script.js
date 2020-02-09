'use strict';

function move(x, y) {
    let xCenter = x - window.innerWidth/2;
    let yCenter = y - window.innerHeight/2;

    let shiftX = xCenter/(window.innerWidth/2);
    let shiftY = yCenter/(window.innerHeight/2);

    let elem = document.querySelector('.blot');

    elem.style.top = -shiftY * 10 + 'px';
    elem.style.left = -shiftX * 10 + 'px';
}

window.addEventListener('mousemove', function(event){
    move(event.clientX, event.clientY)
})