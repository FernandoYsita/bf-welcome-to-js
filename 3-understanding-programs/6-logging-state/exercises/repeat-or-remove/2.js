'use strict';

/*
  log the user's input
  log the user's choice (keep or remove)
  log the final output
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

console.log('User choice:', keepLetters ? 'Keep letters' : 'Repeat each character');

let newPhrase = '';
if (keepLetters) {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (const character of phrase) {
    if (letters.includes(character)) {
      newPhrase += character;
    } else {
      console.log('Removed character:', character);
    }
  }
} else {
  for (const character of phrase) {
    newPhrase += character + character;
    console.log('Repeated character:', character);
  }
}

console.log('Final output:', newPhrase);
alert(newPhrase);
