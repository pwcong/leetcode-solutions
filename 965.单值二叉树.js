/*
 * @lc app=leetcode.cn id=965 lang=javascript
 *
 * [965] 单值二叉树
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
var isUnivalTree = function (root) {
  let val = root.val,
    nodes = [root],
    newNodes;

  while (nodes.length) {
    if (nodes.findIndex((node) => node.val !== val) > -1) {
      return false;
    }

    newNodes = [];
    nodes.forEach((node) => {
      node.left !== null && newNodes.push(node.left);
      node.right !== null && newNodes.push(node.right);
    });
    nodes = newNodes;
  }

  return true;
};
// @lc code=end
