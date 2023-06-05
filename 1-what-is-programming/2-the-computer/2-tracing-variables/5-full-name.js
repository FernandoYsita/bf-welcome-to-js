'use strict';

/*
  comment and uncomment different names
  how will the program change?

  practice tracing it different ways:
  - use "variables" to check how each variable is used
  - open the code in JS Tutor and step through the program
  - use the "trace" button and read the console output
  - fill out a trace table based on the console output
  - use "highlight" to trace the code by drawing on it

  looking for a challenge? Try the "debug" button

*/

// trace the program a few times with different values

let first = 'Pieter';
console.log(first);
// let first = 'Blake';
// let first = 'George';

let last = 'Rabbit';
console.log(last);
// let last = 'Wozzeck';
// let last = 'Schoenberg';

let fullName = first + ' ' + last;
console.log(fullName);

let greeting = 'hello ' + fullName;
console.log(greeting);

greeting = 'good bye ' + fullName;
console.log(greeting);
