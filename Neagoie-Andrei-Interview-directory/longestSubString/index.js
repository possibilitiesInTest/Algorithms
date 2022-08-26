/*

3. Longest Substring Without Repeating Characters
Medium

27908

1202

Add to List

Share
Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

*/

const lengthOfLongestSubstring = function(s)  {
// Time:  O(N)
// Space: O(1)


    // check for s.len <= 1
    // init seenChars charMap as {}
    // init left, longest
    if(s.length <=1) return s.length;
    const seenChars = {};
    let left = 0, longest = 0;

    // iterate through s as right
    // init currentChar as s[right]
    // init prevSeenChar as currentChar in seenChars hashmap
    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        const prevSeenChar = seenChars[currentChar];

    // if prevSeenChar >= left : set left to prev + 1
    // greater than left boundary
        if(prevSeenChar >= left) {
            left = prevSeenChar + 1;
        }

    // update currentChar in hashmap to right val
    // set longest to greatest of (right - left + 1)
        seenChars[currentChar] = right;
        longest = Math.max(longest, (right - left + 1));
    }
    // return longest
    return longest;
}




// var lengthOfLongestSubstring = function(s) {

// // Time:  O(N^2)
// // Space: O(N)

//   // check for edge case
//   // set longest
//   if(s.length <= 1) return s.length;
//   let longest = 0;

//   // iterate through str w. left pointer
//   // init seenChars hashMap
//   // init currentLength at 0
//   for(let left = 0; left < s.length; left++) {
//     let seenChars = {}, currentLength = 0;

//   // iterate through str w. right pointer
//   // init currentChar at s[right]
//     for(let right = left; right < s.length; right++) {
//         const currentChar = s[right];

//   // if currentChar doesn't exist in seenChars
//   // increment currentLength
//   // set seenChars[currentChar] to true
//   // update longest to Math.max of currentLength
//         if(!seenChars[currentChar]) {
//             currentLength++;
//             seenChars[currentChar] = true;
//             longest = Math.max(longest, currentLength);

//         } else {
//             break;
//         }
//     }
//   }
//   return longest;
// };