// Reverse an array, you can't use .reverse()
// Step 5
// changed forEach to for...of

'use strict';

const invert = (array) => {
  const keys = Object.keys(array);
  for(const key of keys) {
    keys[key] = array.pop();
  }
  return keys;
};

module.exports = invert;
