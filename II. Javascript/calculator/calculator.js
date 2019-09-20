var a = prompt('Input first number');
var b = prompt('Input second number');
var c = prompt('Input type of math action:\n Addition +\n Subtraction -\n Multiplication * \n Division /');

if (isNaN(a) || isNaN(b)) {
    alert('You input wrong values!')
}else{
    var aNum = Number(a);
    var bNum = Number(b);
switch (c) {
    case '+':
    alert(`Value is ${aNum+bNum}`);
    break;
    case '-':
    alert(`Value is ${aNum-bNum}`);
    break;
    case '*':
    alert(`Value is ${aNum*bNum}`);
    break;
    case '/':
    alert(`Value is ${aNum/bNum}`);
    };
}
