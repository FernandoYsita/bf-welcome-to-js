
'use strict';

let a = 'y';
let b = 'x';

let temp = a;
a = b;
b = temp;

console.log(a); // 'x'
console.log(b); // 'y'

/*
a <- 'y'
b <- 'x'
temp <- a
a <- b
b <- temp
*/