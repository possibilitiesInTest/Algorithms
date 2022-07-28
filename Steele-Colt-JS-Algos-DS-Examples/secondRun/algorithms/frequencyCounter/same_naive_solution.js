/* Write a function called same, which accepts two arrays
    should return true, if
    all values squared in the second arr correspond to frequency
    of roots in the first

*/
function same(arr1, arr2) { // O(n) time
    // check for arr.length
    if (arr1.length !== arr2.length) {
        return false;
    }
    // iterate through arr1
    for(let i = 0; i < arr1.length; i++) {
    // let correctIndex equal to square in arr2
    // if index does not exist, return false
        let correctIndex = arr2.indexOf(arr1[i]**2)
        if(correctIndex === -1) {
            return false;
        }
    // if correctIndex exists splice from arr2
    // return true
        console.log(arr2);
        arr2.splice(correctIndex, 1);
    }
    return true;
}

same([1,2,3,2], [9,1,4,4])
