// prettier-ignore
{
  // Ensure prettier doesn't remove extra spacing

  'use strict';

  // ::::: don't forget to trace the program! :::::

  let input = null;

  while (input === null) {
    input = prompt('no canceling allowed');
    console.log(input);
  }

  let message = 'thank you for your input: ' + input;

  alert(message);
}
