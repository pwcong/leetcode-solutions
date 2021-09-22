/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [],
    l = nums.length;

  const dfs = function (i, arr) {
    if (i >= l) {
      result.push(arr);
      return;
    }

    dfs(i + 1, [...arr, nums[i]]);
    dfs(i + 1, arr);
  };

  dfs(0, []);
  return result;
};
// @lc code=end
