var a = prompt('Input first number');
var b = prompt('Input second number');

if (isNaN(a) || isNaN(b) || a==='' || b===''){
    alert('You input smth wrong')
}else{
    var aNum = Number(a);
    var bNum = Number(b);
if (aNum > bNum){
    console.log('a more than b')
}else if (aNum < bNum){
    console.log('b more than a')
}else{
    console.log('a = b')   
 };
};