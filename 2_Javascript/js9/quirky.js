/**
 * Quirky operators and precedence in JavaScript
 * What is the output of these three lines and why?
 */

let first = (! + [] * []); // 0
let second = (! + [] + [] * []); // 1
let third = (! + [] + [] + ![]).length; // 9

console.log(first);
console.log(second);
console.log(third);
