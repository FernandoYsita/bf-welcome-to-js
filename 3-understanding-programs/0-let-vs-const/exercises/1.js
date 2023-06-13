// #todo

'use strict';
console.log('-- begin --');

/* declare and assign variables as described in the comments

  pay close attention to how each variable is used!
  - is a variable assigned a value when it is declared?
  - is a variable reassigned later in the script?

  your challenge is to decide whether to use let or to use const
  - use let if
    the variable is declared without an assignment
    or the variable is ever reassigned later in the script
  - use const if
    the variable is declared with a value and never reassigned

*/

let aTree; // declare a variable named aTree, don't assign a value!
console.log(aTree);

aTree = 'birch'; // assign the value "birch" to the variable aTree
console.log(aTree);

const turtle = 'myrtle'; // declare a variable named turtle and assign it the name "myrtle"
console.log(turtle);

aTree = 'aspen'; // reassign aTree to "aspen"
console.log(aTree);

const aColor = 'blue'; // declare a variable named aColor with the value "blue"
console.log(aColor);

console.log(turtle); // log the value of turtle

// Reassigning aTree to "oak" and aColor to "orange" is not allowed as they are declared as constants (const).

console.log('-- end --');
