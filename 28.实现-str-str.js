/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const l = (haystack || "").length,
    _l = (needle || "").length;

  if (_l <= 0) {
    return 0;
  }

  let i = 0,
    j = 0,
    k = 0;
  while (i < l) {
    j = i;
    k = 0;
    while (j < l && haystack[j] === needle[k]) {
      j++;
      k++;
    }
    if (k >= _l) {
      return i;
    }
    i++;
  }

  return -1;
};
// @lc code=end
