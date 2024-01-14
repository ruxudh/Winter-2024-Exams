// Split string by the first occurrence of separator
// Step 8
// Use method push for resultArray

'use strict';

const parseIp = (string) => {
  const resultArray = [];
  if (string === '') return;
  const array = string.split('.');
  const arrayLength = 4;
  if (array.length !== arrayLength) return;
  for (let j = 0; j < array.length; j++) {
    const parsedString = parseInt(array[j])
    if (isNaN(parsedString)) return;
    resultArray.push(parsedString);
  }
  return resultArray;
};

module.exports = parseIp;
