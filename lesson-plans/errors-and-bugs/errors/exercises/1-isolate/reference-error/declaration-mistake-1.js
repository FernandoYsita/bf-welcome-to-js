'use strict';

console.log('--- in execution phase ---');

/*
  environment: google chrome

  name: refrence error
  message: ReferenceError: welf is not defined

  location: line 20

  life cycle:

  the mistake: there is not declaration for welf

  the fix(es): declare welf
*/

const welf = 'ingrad';

console.log(welf);
