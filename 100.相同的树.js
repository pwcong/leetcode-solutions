/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let flag = true;

  const _isSameTree = function (a, b) {
    a = a || {};
    b = b || {};
    if (!flag) {
      return;
    }

    if (a.val !== b.val) {
      flag = false;
      return;
    }

    if (a.left || b.left) {
      _isSameTree(a.left, b.left);
    }
    if (a.right || b.right) {
      _isSameTree(a.right, b.right);
    }
  };

  _isSameTree(p, q);

  return flag;
};
// @lc code=end
