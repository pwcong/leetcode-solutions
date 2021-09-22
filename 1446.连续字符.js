/*
 * @lc app=leetcode.cn id=1446 lang=javascript
 *
 * [1446] 连续字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let max = 0,
    char = "",
    l = s.length,
    p = 0,
    q;

  while (p < l) {
    q = p;

    while (s[q + 1] === s[q]) {
      q++;
    }

    if (q - p + 1 >= max) {
      max = q - p + 1;
      char = s[p];
    }

    p = q + 1;
  }

  return max;
};
// @lc code=end
