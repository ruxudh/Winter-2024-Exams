// Copy all values from dict except listed
// Step 3
// deleted unnecessary rows and arguments

except = (incomingValuesArray, ...deletingElements) => {
  intermediateVariable = Object.keys(incomingValuesArray);
  intermediateVariable.forEach((element) => {
    if (deletingElements.includes(element)) {
      delete incomingValuesArray[element];
    }
  });
  return incomingValuesArray;
};

module.exports = except;
