// Increment all numbers in dictionary
// Step 5
// added intermediate variable 'value'

const  incNumbers = (formatComplete, ...restVariables) => {
  for (const deleteFile of Object.keys(formatComplete)) {
    const value = formatComplete[deleteFile];
    if ((typeof value === 'number')) {
      formatComplete[deleteFile] = formatComplete[deleteFile] + 1;
    }
  }
  return formatComplete;
};

module.exports = incNumbers;
