/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
   candidates.sort((a, b) => a - b); // 오름차순 
    const result = []
    
    function dfs(path, sum, index) {
        for (let i = index; i < candidates.length; i++) {
            if (sum === target) {
                result.push(path)
                return
            }
            if (sum + candidates[i] <= target) {
                dfs([...path, candidates[i]], sum + candidates[i], i)
            }
        }
    }
    
    dfs([], 0, 0);
    
    return result
};