// Filter array by type name
// Step 2
// added const identifiers

const filter = (array, type) => {
  const remove = [];
  for (const element of array) {
    const index = array.indexOf(element);
    if (typeof array[index] !== type) {
      remove.unshift(index);
    }
  }
  for (const index of remove) array.splice(index, 1);
  return array;
};

module.exports = filter;
