'use strict';

console.log('--- in execution phase ---');

/*
  environment: Crhome
  name:Syntaxerror
  message: Identifier 'tree' has already been declared
 

  location: line 22

  life cycle:

  the mistake: Identifier 'tree' has already been declared

  the fix(es): remove the second declaration of tree and only assign the new value to the existing variable.
*/

let tree = 'oak';

tree = 'birch';
