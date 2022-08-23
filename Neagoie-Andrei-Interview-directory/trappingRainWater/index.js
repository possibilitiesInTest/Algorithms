// 1. Identify the pointer with the lesser value
// 2. Is this pointer value greater than or equal to max on that side
//   yes -> update max on that side
//   no -> get water for pointer, add to total
// 3. move pointer inwards
// 4. repeat for other pointer


const getTrappedRainwater = function(heights) {

    let left = 0, right = heights.length - 1, totalWater = 0, maxLeft = 0, maxRight = 0;
    
    while(left < right) {
    // Identify the pointer with the lesser value
      if(heights[left] <= heights[right]) {
      
    //  Is this pointer value greater than
    //  or equal to max on that side
        if(heights[left] >= maxLeft) { 
    //   yes -> update max on that side
            maxLeft = heights[left]
        } else { 
    //   no -> get water for pointer, add to total
          totalWater += maxLeft - heights[left];
        }
        left++;
      } else {
    //  Is this pointer value greater than
    //  or equal to max on that side
        if(heights[right] >= maxRight) {
    //   yes -> update max on that side
            maxRight = heights[right];
        } else {
    //   no -> get water for pointer, add to total
            totalWater += maxRight - heights[right];
        }
          
        right--;
      }
    }
  
    return totalWater;
  }


// const getTrappedRainwater = function(heights) {
//     let totalWater = 0;


//     for(let p =0; p < heights.length; p++) {
//         let leftP = p, rightP = p, maxLeft = 0, maxRight = 0;

//         while(leftP >= 0) {
//             maxLeft = Math.max(maxLeft, heights[leftP]);
//             leftP--;
//         }

//         while(rightP < heights.length) {
//             maxRight = Math.max(maxRight, heights[rightP]);
//             rightP++;
//         }

//         const currentWater = Math.min(maxLeft, maxRight) - heights[p];

//         if(currentWater >= 0) {
//             totalWater += currentWater;
//         }
    
//     }
//     return totalWater;
// }