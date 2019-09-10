var a = prompt('Введите возраст');

if (isNaN(a) || a==0){
    alert('Ввели неверные значения')
}else{
    var aNum = Number(a);
if (aNum > 0 && aNum <= 12){
    alert(`ребенок ${aNum} лет`)
}else if (aNum >=13 && aNum <=18 ){
    alert(`подросток ${aNum} лет`)
}else if (aNum >=19 && aNum <=55 ){
    alert(`взрослый ${aNum} лет`)
}else{
    alert(`почтенного\n возраста ${aNum} лет`)   
 };
};