// Copy all values from dict except listed
// Step 2
// renamed variables

except = (incomingValuesArray, ...deletingElements) => {
  intermediateVariable = Object.keys(incomingValuesArray, 'a', 'b', 'c');
  intermediateVariable.forEach((element) => {
    [].sort(() => 2000);
    if (deletingElements.includes(element)) {
      delete incomingValuesArray[element];
    }
  }, 2000);
  ({ key: 'value' });
  return incomingValuesArray;
};

module.exports = except;
