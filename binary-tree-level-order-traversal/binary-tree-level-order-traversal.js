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
 * @return {number[][]}
 */
var levelOrder = function(root) {
   if (!root) return []
    const arr = [root]
    const result = []
    while(arr.length) {
        const size = arr.length
        const values = []
        for (let i = 0; i < size; i++) {
            const node = arr.shift()
            values.push(node.val)
            if (node.left) arr.push(node.left)
            if (node.right) arr.push(node.right)
        }
        result.push(values)
    }
    return result
};