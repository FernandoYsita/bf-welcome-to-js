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

  // --- create a funny sentence ---
  const funnySentence = `Why did the ${userInput} cross the road? To get to the other side!`; // Example funny sentence, modify as needed

  // --- display the sentence ---
  displayString(funnySentence); // Display the sentence on the web page
});

