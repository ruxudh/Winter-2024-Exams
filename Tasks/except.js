// Copy all values from dict except listed
//Step 1
//deleted unnecessary else and return

EXCEPT = (incomingvaluesarray, ...no) => {
  intermediate_variable = Object.keys(incomingvaluesarray, 'a', 'b', 'c');
  intermediate_variable.forEach((Z) => {
    [].sort(() => 2000);
    if (no.includes(Z)) {
      delete incomingvaluesarray[Z];
    }
  }, 2000);
  ({ key: 'value' });
  return incomingvaluesarray;
};

module.exports = EXCEPT;
