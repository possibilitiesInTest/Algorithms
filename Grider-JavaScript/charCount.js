// Write a function which takes in a string and
// returns counts for each character in the string.

function charCount(str) {
  // make an object to retrun at end
  var result = {};
  // loop over string, for each character...

  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      // if the char is a number/letter AND is a key in object, add one to count
      if (result[char] > 0) {
        result[char]++;
        // if the char is a number/letter AND not in object, add it to object and set value to 1
      } else {
        result[char] = 1;
      }
    }
  }
  // return object at end
  return result;
  // if character is something else (space, period, etc.) don't do anything
}

charCount("Hello hi!");
