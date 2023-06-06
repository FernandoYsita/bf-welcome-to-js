// #todo

'use strict';

let phrase = 'a'; // Variable declaration (yellow)

phrase = ' ' + phrase + ' '; // Variable use (green) connected to declaration

phrase = phrase + 'car'; // Variable use (green) connected to previous assignment

phrase = 'drive' + phrase; // Variable use (green) connected to previous assignment

console.log(phrase); // Output (no variable use)

/*
  - mark each variable use with a different color (like in the ?variables lens)
  - use lines to connect each variable declaration to it's uses

  done with these questions?  try "ask me" and "random line"
*/
