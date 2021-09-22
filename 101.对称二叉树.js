/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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

let cache = {};

const isHW = function (s) {
  s = s.map((n) => (n === null ? "_" : n.val));
  const k = s.join("|");
  if (cache[k] !== undefined) {
    return cache[k];
  }

  let l = s.length,
    i,
    j;

  if (l <= 1) {
    cache[k] = true;
    return true;
  }

  if (l % 2 === 0) {
    i = parseInt(l / 2) - 1;
    j = parseInt(l / 2);
  } else {
    i = j = parseInt(l / 2);
  }

  while (i >= 0) {
    if (s[i] !== s[j]) {
      cache[k] = false;
      return false;
    }
    i--;
    j++;
  }

  cache[k] = true;
  return true;
};
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }

  let nodes = [root],
    t,
    flag;
  while (nodes.length > 0) {
    if (!isHW(nodes)) {
      return false;
    }
    t = [];
    flag = false;
    for (let node of nodes) {
      if (node) {
        flag = true;
        t.push(node.left || null);
        t.push(node.right || null);
      } else {
        t.push(null);
        t.push(null);
      }
    }
    nodes = flag ? t : [];
  }

  return true;
};
// @lc code=end
