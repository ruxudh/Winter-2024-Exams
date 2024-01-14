// Split string by the first occurrence of separator
// Step 2
// Renamed variables

'use strict';

parseIp = (string) => {
  resultArray = [];
  if (string === '') return;
  else {
    array = string.split('.');
    if (array.length != 4) return;
    j = 0;
    for (const element of array) {
      resultArray[j] = parseInt(element);
      if (isNaN(resultArray[j])) return;
      j++;
    }
  }
  return resultArray;
};

module.exports = parseIp;
