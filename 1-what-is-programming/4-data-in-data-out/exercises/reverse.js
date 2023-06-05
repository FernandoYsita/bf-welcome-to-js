'use strict';

/* Reverse

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
  input = prompt('Enter some text to reverse');
  console.log(input);
}

/* --- reverse the input text --- */

let reversed = '';
for (let i = input.length - 1; i >= 0; i--) {
  reversed += input[i];
  console.log(reversed);
}

/* --- create a final message --- */

let message = input + ' -> ' + reversed;
console.log(message);

/* --- display message to the user --- */

alert(message);
