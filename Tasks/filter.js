// Filter array by type name
// Step 4
//Rewrite without mutating incoming parameters 
 
const filter = (array, type) => { 
  const remove = []; 
  const copiedArray = Object.assign(array); 
  for (let index = 0; index < array.length; index++) { 
    if (typeof array[index] !== type) { 
      remove.unshift(index); 
    } 
  } 
  for (const index of remove) copiedArray.splice(index, 1); 
  return copiedArray; 
}; 
 
module.exports = filter;
