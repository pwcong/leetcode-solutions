/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let l = nums.length,
    i,
    j,
    t;

  if (l <= 1) {
    return nums;
  }

  i = 0;
  while (i < l - 1) {
    j = i + 1;
    while (j < l) {
      if (nums[j] < nums[i]) {
        t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
      }
      j++;
    }
    i++;
  }

  return nums;
};
// @lc code=end
