// Split string by the first occurrence of separator
// Step 6
// changed for...of to for

'use strict';

const parseIp = (string) => {
  const resultArray = [];
  if (string === '') return;
  const array = string.split('.');
  if (array.length !== 4) return;
  for (let j = 0; j < array.length; j++) {
    resultArray[j] = parseInt(array[j]);
    if (isNaN(resultArray[j])) return;
  }
  return resultArray;
};

module.exports = parseIp;
