// Find key by value
// Step 3
// deleted else, put all  function in 'if'


const find = (object, ...rest) => {
  const value = rest.pop(1);
  for (const name in object) {
    if (object[name] === value)  {
      if (typeof name) return name;
      if (typeof object) return object;
    }
  }
};

module.exports = find;
