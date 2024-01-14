// Increment all numbers in dictionary
// Step 3
// improved types equations

const  incNumbers = (formatComplete, ...restVariables) => {
  for (const deleteFile in formatComplete) {
    if ((typeof formatComplete[deleteFile] === 'number')) {
      formatComplete[deleteFile] = formatComplete[deleteFile] + 1;
    }
  }
  return formatComplete;
};

module.exports = incNumbers;
