/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const arr = []
    .concat(nums1)
    .concat(nums2)
    .sort((a, b) => {
      if (a > b) {
        return 1;
      } else if (b > a) {
        return -1;
      } else {
        return 0;
      }
    });

  [1, 2, 3, 4];

  const len = arr.length;

  switch (true) {
    case len === 0:
      return 0;
    case len === 1:
      return arr[0];
    case len === 2:
      return (arr[0] + arr[1]) / 2;
    default:
      const t = parseInt(len / 2);
      if (len % 2 === 1) {
        return arr[t];
      } else {
        return (arr[t] + arr[t - 1]) / 2;
      }
  }
};

// @lc code=end
