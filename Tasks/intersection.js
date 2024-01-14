// Find an intersection of two dictionaries
// Step 3
// added const identifiers and changed function declaration to arrow function

const intersection = (object1, object2) => {
  const firstKeys = Object.keys(object1);
  for (const attributeName of firstKeys) {
    if (object1[attributeName] === object2[attributeName]) {
      object2[attributeName] = object1[attributeName];
    } else {
      delete object1[attributeName];
    }
  }
  return object1;
};

module.exports = intersection;
