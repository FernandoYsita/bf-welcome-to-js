// #todo

'use strict';

// combining .toUpperCase or .toLowerCase with .includes is helpful
//  you can now search strings without worrying about upper or lower case

console.log('-- case insensitive string searches --');

// examples
console.log('JavaScript'.toLowerCase().includes('script')); // true
console.log('JAVASCRIPT'.toLowerCase().includes('script')); // true
console.log('javascript'.toLowerCase().includes('script')); // true

console.log('JavaScript'.toUpperCase().includes('SCRIPT')); // true
console.log('JAVASCRIPT'.toUpperCase().includes('SCRIPT')); // true
console.log('javascript'.toUpperCase().includes('SCRIPT')); // true

// exercises
//  fill in the blanks with something that will evaluate to true
//  there's many different answers! how many can you find?

console.log('PassPort'.toLowerCase().includes('pass')); // true
console.log('hACK YouR FuTuRE'.toLowerCase().includes('ack')); // true
console.log('_Robin_Batman'.toLowerCase().includes('batman')); // true

console.log('PassPort'.toUpperCase().includes('port')); // false
console.log('hACK YouR FuTuRE'.toUpperCase().includes('ack')); // false
console.log('_Robin_Batman'.toUpperCase().includes('batman')); // false

console.log('Example'.toLowerCase().includes('exa')); // true
console.log('Hello World'.toLowerCase().includes('lo w')); // true
console.log('1. Example'.toLowerCase().includes('. e')); // true

console.log('Example'.toUpperCase().includes('EXA')); // true
console.log('Hello World'.toUpperCase().includes('LO W')); // true
console.log('1. Example'.toUpperCase().includes('. E')); // true
