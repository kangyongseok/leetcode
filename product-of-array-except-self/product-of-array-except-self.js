/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = []
    nums.reduce((sum, value) => {
         result.push(sum);
        sum *= value;
        return sum 
    }, 1);

    result.reduceRight((sum, value, index) => {
        result[index] *= sum
        sum *= nums[index]
        return sum
    }, 1)
    
    return result
};