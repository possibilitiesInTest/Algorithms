/*
    Given two strings,
    write a function, to determine
    if second word, is anagram of first,
    same letters, rearranged

*/

function validAnagram(first, second) {
    // check for length
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];

      // if letter exists, increment, otherwise set as key in lookup object and set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // if letter in second word not in lookup object return false
      if (!lookup[letter]) {
        return false;

        // decrement letter count to zero
      } else {
        lookup[letter] -= 1;
      }
    }
    // return true
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  validAnagram('anagrams', 'nagaramm')



//   // invalid attempt
//   function validAnagram(str1, str2) {
//     //check for length
//     if (str1.length !== str2.length) {
//         return false;
//     }

//     let arrOfStr1 = str1.split('');
//     let arrOfStr2 = str2.split('');


//     // instantiate counters
//     let frequencyCounter1 = {}
//     let frequencyCounter2 = {}

//     // get key val, add or initialize to 1
//     for (let val of arrOfStr1) {
//         frequencyCounter1[val] = (frequencyCounter1[char] || 0) + 1;
//     }

//     for (let char of arrOfStr2) {
//         frequencyCounter2[val] = (frequencyCounter2[char] || 0) + 1;
//     }

//     console.log(frequencyCounter1);
//     console.log(frequencyCounter2);

//     // check for keys and count
//     if (frequencyCounter1 !== frequencyCounter2){
//         return false;
//     }
//     // return true
//     return true;
  
// }