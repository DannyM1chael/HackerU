/**
 * Write a function to determine if the supplied string is a palindrome
 * Eg:  radar,  racecar, kayak, and redder are all palidromes
 * They are the spelled same backwards and forwards
 */

let palindrome = function (word) {
  let len = word.length;
  let start = word.substring(0, Math.floor(len/2)).toLowerCase();
  let end = word.substring(len - Math.floor(len/2)).toLowerCase();
  //console.log(start, end)
  let flip = end.split('').reverse().join('');
  return (start === flip);
}

console.log(palindrome('radar')); //true
console.log(palindrome('redder')); //true
console.log(palindrome('window')); //false