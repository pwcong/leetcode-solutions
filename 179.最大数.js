/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  const t = nums
    .sort((a, b) => {
      return `${a}${b}` > `${b}${a}` ? -1 : 1;
    })
    .join("");

  return t[0] === "0" ? "0" : t;
};
// @lc code=end
