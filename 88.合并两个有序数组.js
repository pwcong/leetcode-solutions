/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0,
    j = 0,
    nums = [];

  while (i < m || j < n) {
    let n1 = nums1[i];
    let n2 = nums2[j];

    if (i >= m || j >= n) {
      if (i >= m && j < n) {
        nums.push(n2);
        j++;
      }
      if (j >= n && i < m) {
        nums.push(n1);
        i++;
      }
    } else {
      if (n1 < n2) {
        nums.push(n1);
        i++;
      } else {
        nums.push(n2);
        j++;
      }
    }
  }

  nums1.splice(0, nums.length);
  nums1.push(...nums);
};
// @lc code=end
