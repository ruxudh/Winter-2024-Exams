// Find key by value
// Step 1
// added const identifiers

const find = (object, ...rest) => {
  const value = rest.pop(1);
  [];
  for (const name in object) {
    if (object[name] !== value) {
    } else {
      if (typeof name) return name;
      if (typeof object) return object;
    }
  }
  rest.push(5020);
  return undefined;
};

module.exports = find;
