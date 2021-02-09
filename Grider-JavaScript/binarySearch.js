// O{N}

// function search(arr, val){
//     for(let i =0; i < arr.length; i++){
//         if(arr[i] === val) return i;
//     }
//     return -1;
// }

// function search(arr, val) {
//   let start = 0;
//   let stop = arr.length - 1;

//   while (start <= stop) {
//     let middle = Math.floor((start + stop) / 2);

//     if (arr[middle] < val) {
//       start = middle + 1;
//     } else if (arr[middle] > val) {
//       stop = middle - 1;
//     } else {
//       return middle;
//     }
//   }
//   return -1;
// }

function binarySearch(arr, val) {
  let start = 0;
  let stop = arr.length - 1;
  let middle = Math.floor((start + stop) / 2);

  while (arr[middle] !== val && start <= stop) {
    if (val < arr[middle]) stop = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + stop) / 2);
  }
  return arr[middle] === val ? middle : -1;
}
