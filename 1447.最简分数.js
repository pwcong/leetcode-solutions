/*
 * @lc app=leetcode.cn id=1447 lang=javascript
 *
 * [1447] 最简分数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
  let cache = {},
    result = [],
    i,
    j;

  if (n <= 1) {
    return result;
  }

  for (i = 2; i <= n; i++) {
    for (j = 1; j < i; j++) {}
  }
};
// @lc code=end
