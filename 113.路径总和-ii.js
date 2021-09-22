/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  if (!root) {
    return [];
  }

  const result = [];

  const dfs = function (node, path, current) {
    if (!node.left && !node.right) {
      current === targetSum && result.push(path);
    }

    node.left &&
      dfs(node.left, path.concat([node.left.val]), current + node.left.val);
    node.right &&
      dfs(node.right, path.concat([node.right.val]), current + node.right.val);
  };

  dfs(root, [root.val], root.val);
  return result;
};
// @lc code=end
