/*
 * @lc app=leetcode.cn id=1367 lang=javascript
 *
 * [1367] 二叉树中的列表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
  let flag = false;

  const dfs = function (treeNode, listNode) {
    if (flag || !treeNode) {
      return;
    }

    if (!listNode) {
    } else {
    }

    if (!listNode) {
      flag = true;
      return;
    }

    dfs(treeNode.left, next);
    dfs(treeNode.right, next);
  };

  dfs(head, root);

  return false;
};
// @lc code=end
