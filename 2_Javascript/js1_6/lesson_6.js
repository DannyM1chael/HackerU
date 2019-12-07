/*function output(word){
    console.log(`ваш результат: ${word}`)
}
function pow(n, m, callback){
    callback(n**m)
    return n**m
}*/

class Cat {
    constructor(color,casta,energy,tailsCnt){
        this.color = color;
        this.casta = casta;
        this.energy = energy;
        this.tailsCnt = tailsCnt;
    }

    sound() {
        alert('RRRR');
    }

    eat() {
        this.energy = 100;
    }
};

var murzik = new Cat('black','home', 100, 1);

class Laptop {
    constructor(processor,matrix,RAM,HDD,videocard) {
        this.processor = processor;
        this.matrix = matrix;
        this.RAM = RAM;
        this.HDD  = HDD;
        this.videocard = videocard;
    }

    gaming() {
        this.videocard = 'NdiviaGTX';
    }

    movies() {
        alert('ivi.ru');
    }

    OS() {
        alert('MacOS or Windows?')
    }

    RAM() {
        this.RAM = 2048;
    }
};

var myLaptop = new Laptop('i7','IPS',1024,1000,'AMD');

function beautify (className) {
    var elements = document.getElementsByClassName(className);
    for (let i=0; i<elements.length; i++) {
        elements[i].style.backgroundColor = `rgb(${Math.round(Math.random()*255)}
                                                 ${Math.round(Math.random()*255)}
                                                 ${Math.round(Math.random()*255)})`
    }

}
