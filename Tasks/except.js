// Copy all values from dict except listed
// Step 6
// Add use strict

'use strict';

const except = (incomingValuesArray, ...deletingElements) => { 
  const intermediateVariable = Object.keys(incomingValuesArray); 
  const copiedObject = Object.assign(incomingValuesArray); 
  for (const element of intermediateVariable) { 
    if (deletingElements.includes(element)) { 
      delete copiedObject[element]; 
    } 
  } 
  return copiedObject; 
}; 
 
module.exports = except;
