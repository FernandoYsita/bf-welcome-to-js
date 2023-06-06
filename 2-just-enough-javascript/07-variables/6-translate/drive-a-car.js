// #todo

'use strict';

// phrase <- 'a'
let phrase = `a`;
console.log(phrase);
// phrase <- ' ' + phrase + ' '
phrase = phrase + 'car';
console.log(phrase); // ' a car'
// phrase <- phrase + 'car'
phrase = `` + phrase + `car`;
console.log(phrase);
// phrase <- 'drive' + phrase
phrase = 'drive' + phrase;
console.log(phrase); // 'drive a car'