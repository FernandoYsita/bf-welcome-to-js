

'use strict';

console.log('--- in execution phase ---');


/*
  environment: Chrome

  name: syntaxError 
  message: UNxpected token 

  location: line 27

  life cycle: excution

  the mistake: UNxpected token 

  the fix(es): add token if to else
*/

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} else if (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}


