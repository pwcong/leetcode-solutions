/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */

var isBalanced = function (root) {
  if (!root) {
    return true;
  }

  let flag = true;
  let cache = {};

  const getDepth = function (node) {
    if (!node) {
      return 0;
    }

    return Math.max(getDepth(node.left), getDepth(node.right)) + 1;
  };

  const _isBalanced = function (node, depth) {
    if (!node.left && !node.right) {
      return depth;
    }
  };

  _isBalanced(root, 0);

  return flag;
};
// @lc code=end
