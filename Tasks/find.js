// Find key by value
// Step 7
// Add use strict

'use strict';

const find = (object, ...rest) => {
  const value = rest.shift();
  for (const name of Object.keys(object)) {
    if (object[name] === value)  {
      return name;
    }
  }
};

module.exports = find;
