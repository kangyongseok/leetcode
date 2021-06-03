/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const result = {}
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (!result[nums[i]]) {
            result[nums[i]] = 1
        } else {
            result[nums[i]] += 1
        }
    }
    
    return Object.keys(result).filter(i => result[i] === 1)[0]
};