/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = []
    
    function dfs (path, index) {
        result.push(path)
        for(let i = index; i < nums.length; i++) {
            dfs(path.concat(nums[i]), i + 1);
        }
    }
    
    dfs([], 0)
    
    return result
};