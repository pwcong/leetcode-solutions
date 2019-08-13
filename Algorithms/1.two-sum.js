/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (44.41%)
 * Likes:    11500
 * Dislikes: 396
 * Total Accepted:    2M
 * Total Submissions: 4.5M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 *
 * Example:
 *
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var i,
    l = nums.length
  var nm = {}

  for (i = 0; i < l; i++) {
    nm[nums[i]] = i
  }

  for (i = 0; i < l; i++) {
    var t = nm[target - nums[i]]
    if (t !== undefined && t !== i) {
      return t > i ? [i, t] : [t, i]
    }
  }
}
