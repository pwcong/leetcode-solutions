/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  nums = nums.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));

  let l = nums.length,
    i = 0;
  while (i < l) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
    i += 2;
  }
};
// @lc code=end
