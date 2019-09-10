var a = prompt('Input first number');
var b = prompt('Input second number');
var c = prompt('Input type of math action:\n Addition +\n Subtraction -\n Multiplication * \n Division /');

if (isNaN(a) || isNaN(b) || b!==0 || c!=="+" || c!=="-" || c!=="*" || c!=="/") {
    alert('You input wrong values or you want to divide to zero!')
}else{
    var aNum = Number(a);
    var bNum = Number(b);
switch (c) {
    case"+":
    alert(`Value is ${aNum+bNum}`);
    break;
    case"-":
    alert(`Value is ${aNum-bNum}`);
    break;
    case"*":
    alert(`Value is ${aNum*bNum}`);
    break;
    case"/":
    alert(`Value is ${aNum/bNum}`);
};
}
