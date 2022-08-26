// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

 

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".
 

// Constraints:

// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.
 

// Follow up: Can you solve it in O(n) time and O(1) space?

const string1 = "ab#z"
const string2 = "az#z"

var backspaceCompare = function(S, T) {
    let p1 = S.length - 1, p2 = T.length - 1;
    
    while(p1 >= 0 || p2 >= 0) {
        if(S[p1] === "#" || T[p2] === "#") {
            if(S[p1] === "#") {
                let backCount = 2;
                
                // set backCount based on hash
                // if backCount decrement p1
                // decrement backCount until [p1] [p2] compare
                while(backCount > 0) {
                    p1--;
                    backCount--;
                    
                    if(S[p1] === "#") {
                        backCount += 2;
                    }
                }
            }

              // set backCount based on hash
              // if backCount decrement p1
              // decrement backCount until [p1] [p2] compare
            if(T[p2] === "#") {
                let backCount = 2;
                
                while(backCount > 0) {
                    p2--;
                    backCount--;
                    
                    if(T[p2] === "#") {
                        backCount += 2;
                    }
                }
            }
            
        } else {
            // [p1] [p2] compare
            if(S[p1] !== T[p2]) {
                return false;
            } else {
                p1--;
                p2--;
            }
        }
    }
    
    return true;
};

console.log(backspaceCompare(string1, string2));



// solution(1):


// const buildString = function(string) {
//     const builtString = [];
//     for(let p = 0; p < string.length; p++) {
//         if(string[p] !== '#') {
//             builtString.push(string[p]);
//         } else {
//             // '#'counts as backspace
//             builtString.pop();
//         }
//     }
    
//     return builtString;
// }

// var backspaceCompare = function(S, T) {
//     const finalS = buildString(S);
//     const finalT = buildString(T);
    
//     if(finalS.length !== finalT.length) {
//         return false
//     } else {
//         for(let p = 0; p < finalS.length; p++) {
//             if(finalS[p] !== finalT[p]) {
//                 return false
//             }
//         }
//     }
    
//     return true;
// };