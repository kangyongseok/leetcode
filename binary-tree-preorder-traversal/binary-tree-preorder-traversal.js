/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const result = []
    if (!root) return result
    function test (data) {
        result.push(data.val)
        if (data.left) test(data.left)
        if (data.right) test(data.right)
    }
    test(root)
    return result
};