/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
  let max = 0;
  if (!root) {
    return max;
  }
  const _maxDepth = function (node, current) {
    if (current > max) {
      max = current;
    }

    node.left && _maxDepth(node.left, current + 1);
    node.right && _maxDepth(node.right, current + 1);
  };

  _maxDepth(root, 1);
  return max;
};
// @lc code=end
