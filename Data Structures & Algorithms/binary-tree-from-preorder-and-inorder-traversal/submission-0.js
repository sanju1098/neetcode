/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const inorderMap = new Map();
        for (let i = 0; i < inorder.length; i++) {
            inorderMap.set(inorder[i], i);
        }
        let preorderIndex = 0;
        function build(left, right) {
            if (left > right) {
                return null;
            }
            const rootValue = preorder[preorderIndex++];
            const root = new TreeNode(rootValue);
            const rootIndex = inorderMap.get(rootValue);
            root.left = build(left, rootIndex - 1);
            root.right = build(rootIndex + 1, right);
            return root;
        }
        return build(0, inorder.length - 1);
    }
}
