/*
 * @lc app=leetcode.cn id=1051 lang=javascript
 *
 * [1051] 高度检查器
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  return [...heights]
    .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
    .reduce((p, c, i) => {
      if (c !== heights[i]) {
        return p + 1;
      }

      return p;
    }, 0);
};
// @lc code=end
