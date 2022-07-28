/*
    Given two strings,
    write a function, to determine
    if second word, is anagram of first,
    same letters, rearranged

*/


function validAnagram(str1, str2) {
    //check for length
    if (str1.length !== str2.length) {
        return false;
    }

    // instantiate counters
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    // get key val, add or initialize to 1
    for (let char of str1) {
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    }

    for (let char of str1) {
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    // check for keys and count
    if (frequencyCounter1 !== frequencyCounter2){
        return false;
    }
    // return true
    return true;
  
}