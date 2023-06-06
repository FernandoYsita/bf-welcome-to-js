// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

const formIdentifier = 'myForm'; // Replace 'myForm' with the actual identifier for your form

whenFormDataChanges(formIdentifier, () => {
  console.log('\n--- form data changed ---');

  // --- read user input ---
  const userInput = readString(formIdentifier); // Read user input from the form

  // --- create a message ---
  const message = `User input: ${userInput}`; // Example message creation, modify as needed

  // --- display the message ---
  displayString(message); // Display the message on the web page
});
