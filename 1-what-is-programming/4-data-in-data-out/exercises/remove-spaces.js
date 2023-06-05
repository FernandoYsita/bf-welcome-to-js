'use strict';

/* Remove Spaces

  Data In:
    - None

  Data Out:
    - None

  Test Cases:
    - Test with empty input
    - Test with input containing spaces
    - Test with input containing no spaces

*/

/* --- gather user input --- */

let input = null;
while (input === null || input.trim() === '') {
  input = prompt('Enter some text, all the spaces will be removed');
  console.log(input);
}

/* --- create new data with no spaces --- */

let spaceless = '';
for (let character of input) {
  if (character !== ' ') {
    spaceless += character;
    console.log(spaceless);
  }
}

/* --- create a final message --- */

let message = 'Before: ' + input + '\nAfter: ' + spaceless;
console.log(message);

/* --- display message to the user --- */

alert(message);
