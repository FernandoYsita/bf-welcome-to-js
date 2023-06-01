'use strict';

console.log('--- in execution phase ---');

/*
  environment:Chrome  

  name: ReferenceError
  message:

  location:  line 24

  life cycle:

  the mistake:

  the fix(es):
*/
const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

let isValidUserName; // Declare the variable here

if (userName.length > 3) {
  isValidUserName = true;
}

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
