// Reverse dict, exchange keys and values
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
