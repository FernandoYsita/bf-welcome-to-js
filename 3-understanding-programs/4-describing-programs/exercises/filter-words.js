// #todo

'use strict';

let sentence = '';

let isValid = false;
while (!isValid) {
  sentence = prompt('Enter a sentence with at least 2 words');

  if (sentence === null) {
    alert('There is no escape');
  } else if (sentence.trim().split(' ').length < 2) {
    alert('The sentence must have at least 2 words');
  } else {
    isValid = true;
  }
}

sentence = sentence.trim() + ' ';

let newSentence = '';

let nextWord = '';
for (const character of sentence) {
  if (character === ' ') {
    const keep = confirm('Do you want to keep this word:\n\n' + nextWord);
    if (keep) {
      newSentence = newSentence + nextWord + ' ';
    }
    nextWord = '';
  } else {
    nextWord = nextWord + character;
  }
}

alert(newSentence.trim());

