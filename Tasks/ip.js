// Split string by the first occurrence of separator
// Step 3
// Added identifiers

'use strict';

const parseIp = (string) => {
  const resultArray = [];
  if (string === '') return;
  else {
    const array = string.split('.');
    if (array.length != 4) return;
    let j = 0;
    for (const element of array) {
      resultArray[j] = parseInt(element);
      if (isNaN(resultArray[j])) return;
      j++;
    }
  }
  return resultArray;
};

module.exports = parseIp;
