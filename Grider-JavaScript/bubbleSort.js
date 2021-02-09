// ES5
// function swap(arr, idx1, idx2) {
//   var temp = arr[idx1];
//   arr[idx1] = arr[idx2];
//   arr[idx2] = temp;
// }

// ES2015
// const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// }

// write a function that takes an array
// with a var i going from end of arr to start
// start an inner loop w. var j from the start until i-1
// if arr[j] is greater than arr[j+1], swap

function bubbleSort(arr) {
  let noSwaps;

  for (var i = arr.length - 1; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i; j++) {
      // console.log(arr[j], arr[j + 1]);
      // j < arr.length: last item
      // compared to undefined
      // so arr.length should be less than i
      // iterate i backwards
      // so j < arr.length -1

      if (arr[j] > arr[j + 1]) {
        // SWAP!
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
    console.log("ONE PASS COMPLETE!");
  }
  console.log(arr);
  return arr;
}

bubbleSort([37, 42, 29, 8]);
