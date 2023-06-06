// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('myForm', () => {
  console.log('\n--- form data changed ---');

  // --- read user input ---
  const name = readString('nameInput'); // Assuming the input field has an ID of 'nameInput'

  // --- create a greeting ---
  const greeting = `Hello, ${name}!`;

  // --- display the greeting ---
  displayString('greetingOutput', greeting); // Assuming there is an element with an ID of 'greetingOutput' to display the greeting
});

