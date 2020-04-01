//Why do we get this weird result from the map method?
// myarray.map(func);
//We want to convert 3 strings into numbers

let result = ['1', '7', '11'].map(parseInt); //returns [1, NaN, 3]

//parseInt(num, radix)

let result1 = ['1', '7', '11'].map(item => parseInt(item));

console.log(result);
console.log(result1);