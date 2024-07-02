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
 * @return {boolean}
 */
var isValidBST = function (root) {
    const traversal = (node, min, max) => {
        if (!node) return true;

        if (node.val > min && node.val < max) {
            return traversal(node.left, min, node.val) && traversal(node.right, node.val, max)
        } else return false;

    }

    return traversal(root, Math.pow(2, 31) * (-1) - 1, Math.pow(2, 31))
};

