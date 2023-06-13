'use strict';

/*
  _a:
    declaration:
      init: yes
      types: number
      scopes: global
    reads: 3
      scopes: while
      checks:if

_b:
    declaration:
      init: yes
      types: string
      scopes: global
    reads: 2
      scopes: while, global
    assignments: 1
      types: string
      scopes: while

_c:
    declaration:
      init: yes
      types: string
      scopes: while
    reads: 3
      scopes: while
      checks:if

_d:
    declaration: use only for cancel
*/

alert('you will need to enter strings with "e" in the right place');

let _a = 0;

let _b = 'entries:';

while (true) {
  let _c = prompt('input a string with "e" at index ' + _a);

  if (_c === null) {
    let _d = confirm('are you sure you want to cancel?');
    if (_d) {
      break;
    } else {
      continue;
    }
  }

  if (_c[_a] !== 'e') {
    _b = _b + '\nx. "' + _c + '"';
    break;
  }

  _b = _b + '\n' + _a + '. "' + _c + '"';
  _a = _a + 1;
}

alert('your score: ' + _a + '\n\n' + _b);
