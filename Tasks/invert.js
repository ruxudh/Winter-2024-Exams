// Reverse an array, you can't use .reverse()
// Step 3
// renamed variables

'use strict';

invert = (array) => {
  keys = Object.keys(array);
  keys.forEach((i) => {
    keys[i] = array.pop();
  });
  return keys;
};

module.exports = invert;
