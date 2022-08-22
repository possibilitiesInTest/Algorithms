/*
Given an array of heights
find the greatest area for given heights



*/

var maxArea = function(heights) {
    let p1 = 0, p2 =  heights.length-1, maxArea = 0;
    
    while(p1 < p2) {
        const height = Math.min(heights[p1], heights[p2]);
        const width = p2 - p1;
        const area = height * width;
        maxArea = Math.max(maxArea, area);

        if(heights[p1] <= heights[p2]) {
            p1++;
        } else {
            p2--;
        }
    }

    return maxArea;
}












// const getMaxWaterContainer = function(heights) {
//     let maxArea = 0;
//     for(let p1 = 0; p1 < heights.length; p++) {
//         for(let p2 =p1+1; p2 < heights.length; p2++) {
//             const height = Math.min(heights[p1], heights[p2]);
//             const width = p2- p1;
//             const area = height * width;

//             maxArea = Math.max(maxArea, area);
//         }
//     };

//     return maxArea;
// }