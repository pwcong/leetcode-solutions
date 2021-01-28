/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 1.暴力解法
  // let i,
  //   j,
  //   l = nums.length;
  // for (i = 0; i < l - 1; i++) {
  //   for (j = i + 1; j < l; j++) {
  //     if (nums[i] + nums[j] === target) {
  //       return [i, j];
  //     }
  //   }
  // }

  // 2.哈希表解法
  const hash = {};
  for (let i = 0, l = nums.length; i < l; i++) {
    const n = nums[i];
    const t = hash[target - n];
    if (t >= 0 && t !== i) {
      return t > i ? [i, t] : [t, i];
    } else {
      hash[n] = i;
    }
  }
};
// @lc code=end
