function same(arr1, arr2){

    // check for arr length
    if(arr1.length !== arr2.length){
        return false;
    }

    // instantiate counters
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    // add one or initiliaze to 1
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    // add one or initiliaze to 1
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    
    // 
    for(let key in frequencyCounter1){
        // check if square keys appear in second counter
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        //check if square key value matches val in arr1
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [9,1,4,4,11])