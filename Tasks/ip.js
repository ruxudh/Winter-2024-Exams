// Split string by the first occurrence of separator
// Step 1
// Add use strict

'use strict';

Parseip = (i) => {
  a = [];
  if (i === '') return;
  else {
    B = i.split('.');
    if (B.length != 4) return;
    j = 0;
    for (const b of B) {
      a[j] = parseInt(b);
      if (isNaN(a[j])) return;
      j++;
    }
  }
  return a;
};

module.exports = Parseip;
