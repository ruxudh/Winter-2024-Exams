// Find key by value
// Step 2
// deleted unnecessary rows of code

const find = (object, ...rest) => {
  const value = rest.pop(1);
  for (const name in object) {
    if (object[name] !== value) {
    } else {
      if (typeof name) return name;
      if (typeof object) return object;
    }
  }
};

module.exports = find;
