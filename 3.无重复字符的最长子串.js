/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i = 0,
    j = 0,
    l = s.length,
    cache = [],
    t,
    n,
    max = 0;

  for (i; i < l; i++) {
    t = s[i];
    n = cache.indexOf(t);
    if (n > -1) {
      j = i + 1;
      cache.splice(0, n + 1);
    }

    cache.push(t);

    if (cache.length > max) {
      max = cache.length;
    }
  }

  if (i - j > max) {
    max = i - j;
  }

  return max;
};

// @lc code=end
