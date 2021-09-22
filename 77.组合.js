/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];

  const dfs = function (c, l, arr) {
    if (c > n) {
      if (l === k) {
        result.push(arr);
      }
      return;
    }

    if (n - c < k - l - 1) {
      return;
    }

    dfs(c + 1, l + 1, [...arr, c]);
    dfs(c + 1, l, arr);
  };

  dfs(1, 0, []);
  return result;
};
// @lc code=end
