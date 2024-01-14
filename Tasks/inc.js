// Increment all numbers in dictionary
// Step 6
//Rewrite without mutating incoming parameters 
//Delete redundant parameter 
 
const incNumbers = (formatComplete) => { 
  const copiedFormatComplete = Object.assign(formatComplete); 
  for (const deleteFile of Object.keys(formatComplete)) { 
    const value = formatComplete[deleteFile]; 
    if (typeof value === "number") { 
      copiedFormatComplete[deleteFile] += 1; 
    } 
  } 
  return copiedFormatComplete; 
}; 
 
module.exports = incNumbers;
