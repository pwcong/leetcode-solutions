/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const l = nums.length;
  if (l <= 0) {
    return 0;
  }

  let left = 0,
    right = l - 1,
    counter = 0;

  while (left <= right) {
    if (nums[left] === val) {
      while (nums[right] === val && right > left) {
        counter++;
        right--;
      }

      nums[left] = nums[right];
      nums[right] = 0;
      counter++;
      right--;
    }
    left++;
  }

  return l - counter;
};
// @lc code=end