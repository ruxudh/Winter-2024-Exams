// Find key by value
// Step 5
// changed for...in to for...of

const find = (object, ...rest) => {
  const value = rest.pop(1);
  for (const name of Object.keys(object)) {
    if (object[name] === value)  {
      return name;
    }
  }
};

module.exports = find;
