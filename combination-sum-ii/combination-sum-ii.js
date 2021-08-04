/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => (a - b));
    let result = [];
    visited = new Array(candidates.length).fill(false);
        
    function dfs(current, currentSum, startIndex, visited){
        if(currentSum == target) {
            result.push(current);
            return;
        }
        if (currentSum > target) {
            return;
        }
        
        for (let i = startIndex; i < candidates.length; i++) {
            if(i > 0 && candidates[i] == candidates[i - 1] && !visited[i - 1]) {
                continue;
            }
            visited[i] = true;
            dfs(current.concat(candidates[i]), currentSum + candidates[i], i + 1, visited);
            visited[i] = false;
        }
    }
    
    dfs([], 0, 0, visited);
    return result;
};