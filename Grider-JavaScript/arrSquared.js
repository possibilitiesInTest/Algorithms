// Write a function which takes in two arrays
// and checks if the elements of the second array
// are squares of the elements in the first

function arrSquared(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex == -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

arr1 = [1, 2, 3, 2];
arr2 = [9, 1, 4, 4];
