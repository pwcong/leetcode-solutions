/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
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
var inorderTraversal = function (root) {
  const result = [];

  if (!root) {
    return result;
  }

  const _inorderTraversal = function (node) {
    node.left && _inorderTraversal(node.left);
    result.push(node.val);
    node.right && _inorderTraversal(node.right);
  };

  _inorderTraversal(root);
  return result;
};
// @lc code=end
