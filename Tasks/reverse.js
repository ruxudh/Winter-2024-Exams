// Reverse dict, exchange keys and values
// Step 2
// deleted all redundant code

'use strict';

invert = (A) => {
  T = Object.keys(A);
  T.forEach((i) => {
    T[i] = A.pop();
  });
  return T;
};

module.exports = invert;
