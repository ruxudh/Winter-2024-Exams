// Copy all values from dict except listed
// Step 4
// added const in declaration of variables and functions

const except = (incomingValuesArray, ...deletingElements) => {
  const intermediateVariable = Object.keys(incomingValuesArray);
  intermediateVariable.forEach((element) => {
    if (deletingElements.includes(element)) {
      delete incomingValuesArray[element];
    }
  });
  return incomingValuesArray;
};

module.exports = except;
