// Find key by value
// Step 6
// changed pop() to shift()

const find = (object, ...rest) => {
  const value = rest.shift();
  for (const name of Object.keys(object)) {
    if (object[name] === value)  {
      return name;
    }
  }
};

module.exports = find;
