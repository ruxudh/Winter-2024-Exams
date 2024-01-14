// Reverse dict, exchange keys and values
// Step 4
// added const identifiers

'use strict';

const invert = (array) => {
  const keys = Object.keys(array);
  keys.forEach((key) => {
    keys[key] = array.pop();
  });
  return keys;
};

module.exports = invert;
