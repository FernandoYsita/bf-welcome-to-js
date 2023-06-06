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

  // --- do the math ---
  const sum = number1 + number2;
  const difference = number1 - number2;
  const product = number1 * number2;
  const quotient = number1 / number2;

  // --- create a message ---
  const message = `Sum: ${sum}, Difference: ${difference}, Product: ${product}, Quotient: ${quotient}`;

  // --- display the message ---
  displayString(message, 'output');
});
