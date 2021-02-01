// write a function which accepts a sorted array of ints
// returns the first pair where the sum is 0, or is undefined

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + j; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);
