'use strict';

/*
  log the user's input
  log every character that is removed
  log the final result
*/

let phrase = null;
while (phrase === null) {
  phrase = prompt('enter a phrase');
}

console.log('User input:', phrase);

const keepLetters = confirm(
  '"ok" to remove everything that is not a letter\n' +
    '"cancel" to repeat each character',
);

let removedCharacters = '';
let newPhrase = '';
if (keepLetters) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  for (const character of phrase) {
    if (letters.includes(character.toLowerCase())) {
      newPhrase = newPhrase + character;
    } else {
      removedCharacters += character;
    }
  }
} else {
  for (const character of phrase) {
    newPhrase = newPhrase + character + character;
  }
}

console.log('Removed characters:', removedCharacters);
console.log('Final result:', newPhrase);
alert(newPhrase);

