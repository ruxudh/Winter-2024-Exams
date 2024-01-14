// Find an intersection of two dictionaries
// Step 2
// renamed variables

intersection = function intersection(object1, object2) {
  firstKeys = Object.keys(object1);
  for (attributeName of firstKeys) {
    if (object1[attributeName] === object2[attributeName]) {
      object2[attributeName] = object1[attributeName];
    } else {
      delete object1[attributeName];
    }
  }
  return object1;
};

module.exports = intersection;
