// Split string by the first occurrence of separator
// Step 5
// made strong equal array.length !== 4

'use strict';

const parseIp = (string) => {
  const resultArray = [];
  if (string === '') return;
  const array = string.split('.');
  if (array.length !== 4) return;
  let j = 0;
  for (const element of array) {
    resultArray[j] = parseInt(element);
    if (isNaN(resultArray[j])) return;
    j++;
  }
  return resultArray;
};

module.exports = parseIp;
