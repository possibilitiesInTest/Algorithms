/*
Given an array of heights
find the greatest area for given heights

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
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