// Increment all numbers in dictionary
// Step 4
// changed for...in to for...of

const  incNumbers = (formatComplete, ...restVariables) => {
  for (const deleteFile of Object.keys(formatComplete)) {
    if ((typeof formatComplete[deleteFile] === 'number')) {
      formatComplete[deleteFile] = formatComplete[deleteFile] + 1;
    }
  }
  return formatComplete;
};

module.exports = incNumbers;
