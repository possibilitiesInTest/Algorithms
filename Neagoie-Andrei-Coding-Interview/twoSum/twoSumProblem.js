/* given an array of positive integers
   determine if two integers will result 
   in the target
*/

/*
two pointer technique
set p1 at first index
set p2 to iterate through arr
set numToFind = T -nums[p1]


*/

let nums = [1, 3, 7, 9, 2];
let t = 11;

// brute force solution O(N^2)
// var twoSum = function (nums, t) {
//   for (let p1 = 0; p1 < nums.length; p1++) {
//     const numToFind = t - nums[p1];

//     for (let p2 = p1 + 1; p2 < nums.length; p2++) {
//       if (numToFind === nums[p2]) {
//         return [p1, p2];
//       }
//     }
//   }
//   return null;
// };

// optimized solution
var findTwoSum = function (nums, target) {
  const numsMap = {};
  for (let p = 0; p < nums.length; p++) {
    const currentMapVal = numsMap[nums[p]];
    if (currentMapVal >= 0) {
      return [currentMapVal, p];
    } else {
      const numberToFind = target - nums[p];
      numsMap[numberToFind] = p;
    }
  }
  return null;
};
