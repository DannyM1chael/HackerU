/**
 * Write a function to determine the largest difference 
 * between any two numbers in an array of numbers
 */

let numbers = [12, 2, 6, 5, 9, 10, 33];

let difference = (function (arr) {
    let answer = Array.from(new Set(arr)).sort((a,b) => (b - a));
    return answer[0] - answer[answer.length - 1];
})(numbers);

console.log(difference);