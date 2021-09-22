/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }

  let flag = false;

  const dfs = function (node, current) {
    if (flag) {
      return;
    }

    if (!node.left && !node.right) {
      current === targetSum && (flag = true);
      return;
    }

    node.left && dfs(node.left, current + node.left.val);
    node.right && dfs(node.right, current + node.right.val);
  };

  dfs(root, root.val);

  return flag;
};
// @lc code=end
