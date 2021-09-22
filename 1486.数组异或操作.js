/*
 * @lc app=leetcode.cn id=1486 lang=javascript
 *
 * [1486] 数组异或操作
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  return Array.from(new Array(n))
    .map((_, i) => start + 2 * i)
    .reduce((p, c) => p ^ c);
};
// @lc code=end
