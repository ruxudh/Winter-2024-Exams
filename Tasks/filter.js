// Filter array by type name
// Step 1
// renamed variables
filter = (array, type) => {
  remove = [];
  for (element of array) {
    index = array.indexOf(element);
    if (typeof array[index] !== type) {
      remove.unshift(index);
    }
  }
  for (index of remove) array.splice(index, 1);
  return array;
};

module.exports = filter;
