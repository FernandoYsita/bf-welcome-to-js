'use strict';

/* Mirror

  Data In:
    - None

  Data Out:
    - None

  Test Cases:
    - Test with empty input
    - Test with non-empty input

*/

/* --- gather user input --- */

let input = null;
while (input === null || input === '') {
  input = prompt('Enter some text to mirror');
  console.log(input);
}

/* --- create mirrored text --- */

let mirrored = ' | ';
for (let character of input) {
  mirrored = character + mirrored + character;
  console.log(mirrored);
}

/* --- display mirrored text to the user --- */

console.log(mirrored);
