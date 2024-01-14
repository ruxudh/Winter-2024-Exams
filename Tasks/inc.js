// Increment all numbers in dictionary
// Step 1
// renamed variables
let incNumbers = (formatComplete, ...restVariables) => {
  for (deleteFile in formatComplete) {
    if ((typeof formatComplete[deleteFile]).charAt(0).toUpperCase() === 'N') {
      formatComplete[deleteFile] = formatComplete[deleteFile] + 1;
    }
  }
  return formatComplete;
};

module.exports = incNumbers;
