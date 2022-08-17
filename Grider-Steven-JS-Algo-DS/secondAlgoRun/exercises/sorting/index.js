// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    // Implement bubblesort
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < (arr.length - i - 1); j++) {
            if(arr[j] > arr[j+1]) {
                let lesserOfTwo = arr[j + 1];
                arr[j+1] = arr[j];
                arr[j] = lesserOfTwo;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let indexOfMin = i;

        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }
        swap(arr, indexOfMin, i);
    }
    return arr;
}

function swap(arr, indexOfMin, i) {
    if(indexOfMin !== i) {
        // let lesserOfTwo = arr[indexOfMin];
        // arr[indexOfMin] = arr[i];
        // arr[i] = lesserOfTwo;  
        
        [arr[i], arr[indexOfMin]] =  [arr[indexOfMin], arr[i]]
    }
}   


function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
