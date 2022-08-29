


const isAlmostPalindrome = function(s) {
 
    // set left and right pointer
    // while left less than right
    // check if left != right
    // return validSubPalindrome of (s, left+1, right)
    // or validSubPal(s, left, right-1)
    // increment left, decrement right
    // return true
    let left = 0, right = s.length-1;
    while(left < right) {
        if(s[left] !== s[right]){
            return validSubPalindrome(s, s.left + 1, right) || validSubPalindrome(s, left, right-1) {
            }
            left++;
            right--;
        }
    }
    return true;
}



const validSubPalindrome = function (s, left, right) {

    // while left is less than right pointer
    // check left equals right: return false
    // increment left, decrement right
    // return true
    while (left < right) {
        if(s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}



// const isValidPalindrome = function(s){
//     s = s.replace(/[^A-Z a-z 0-9]/g,"").toLowerCase();

//     rev = s.split("").reverse().join("");

//     return s === rev;
// }