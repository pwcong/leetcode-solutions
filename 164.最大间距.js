/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  nums = nums.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));

  let max = 0,
    i = 0,
    t,
    l = nums.length;

  if (l < 2) {
    return 0;
  }

  while (i < l - 1) {
    t = nums[i + 1] - nums[i];

    if (t > max) {
      max = t;
    }
    i++;
  }

  return max;
};
// @lc code=end
