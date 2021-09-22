/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
  if (!root) {
    return 0;
  }

  let min = Infinity;
  const _minDepth = function (node, current) {
    if (!node.left && !node.right) {
      current < min && (min = current);
    }

    node.left && _minDepth(node.left, current + 1);
    node.right && _minDepth(node.right, current + 1);
  };

  _minDepth(root, 1);

  return min;
};
// @lc code=end
