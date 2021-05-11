/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    function dfs (openCount, closeCount, s) {
        if (openCount > closeCount) return
        if (openCount === 0 && closeCount === 0) {
            result.push(s)
            return;
        }
        console.log(openCount, closeCount, s)
        if (openCount > 0) dfs(openCount - 1, closeCount, s + '(');
        if (closeCount > 0) dfs(openCount, closeCount - 1, s + ')');
    }
    
    dfs(n, n, '')
    return result
};