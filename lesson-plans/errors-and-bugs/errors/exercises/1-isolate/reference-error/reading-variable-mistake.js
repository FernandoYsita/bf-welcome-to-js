'use strict';

console.log('--- in execution phase ---');

/*
  environment:Chrome

  name: ReferenceError:
  message: cant not access 'tomatoes' before initialization
 

  location: line 20

  life cycle: excution

  the mistake: cant not access 'tomatoes'

  the fix(es): give acces 'tomatoes'
*/

let tomatoes = 'fresh';

console.log(tomatoes);

