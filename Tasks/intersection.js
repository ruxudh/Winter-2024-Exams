// Find an intersection of two dictionaries 
// Step 5
// Rewrite without mutating incoming parameters 
// Add use strict
 
'use strict'; 
 
const intersection = (object1, object2) => { 
  const firstKeys = Object.keys(object1); 
  const copiedObject = Object.assign(object1); 
  for (const attributeName of firstKeys) { 
    if (object1[attributeName] !== object2[attributeName]) { 
      delete copiedObject[attributeName]; 
    } 
  } 
  return copiedObject; 
}; 
 
module.exports = intersection;
