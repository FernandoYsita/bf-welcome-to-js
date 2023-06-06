import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

const formIdentifier = 'myForm'; // Replace 'myForm' with the actual identifier for your form

whenFormDataChanges(formIdentifier, () => {
  console.log('--- form data changed ---');

  // --- read user values ---
  const number1 = readNumber(formIdentifier, 'number1'); // Read the value of 'number1' from the form
  const number2 = readNumber(formIdentifier, 'number2'); // Read the value of 'number2' from the form

  // --- multiply the numbers ---
  const result = number1 * number2;

  // --- create a message ---
  const message = `The result of multiplying ${number1} and ${number2} is ${result}.`;

  // --- display the message ---
  displayString(message);
});
