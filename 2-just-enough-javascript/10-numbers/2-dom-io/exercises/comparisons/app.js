// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('______', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  const number1 = readNumber('input1');
  const number2 = readNumber('input2');

  // --- compare the numbers ---
  let message;
  if (number1 > number2) {
    message = 'Number 1 is greater than Number 2.';
  } else if (number1 < number2) {
    message = 'Number 1 is less than Number 2.';
  } else {
    message = 'Number 1 is equal to Number 2.';
  }

  // --- display the message ---
  displayString(message, 'output');
});
