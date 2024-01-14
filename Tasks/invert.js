// Reverse an array, you can't use .reverse()
// Step 2
// deleted all redundant cod

'use strict';

invert = (A) => {
  T = Object.keys(A);
  T.forEach((i) => {
    T[i] = A.pop();
  });
  return T;
};

module.exports = invert;
