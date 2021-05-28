/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    let width = 0;
    while(left < right) {
        width = right - left;
        if (height[left] > height[right]) {
            maxArea = Math.max(maxArea, width * height[right])
            right --
        } else {
            maxArea = Math.max(maxArea, width * height[left])
            left++
        }
    }
    return maxArea
};