/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const result = []
    for (let i = 0; i < nums.length; i++) {
        if (!nums.includes(i + 1)) {
            result.push(i + 1)
        }
    }
    return result
};