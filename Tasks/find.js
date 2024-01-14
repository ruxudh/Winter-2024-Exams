// Find key by value
// Step 4
// improved returns

const find = (object, ...rest) => {
  const value = rest.pop(1);
  for (const name in object) {
    if (object[name] === value)  {
      return name;
    }
  }
};

module.exports = find;
