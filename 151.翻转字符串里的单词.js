/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.split(" ").filter((_s) => !!_s);
  let l = s.length,
    i;

  if (l <= 1) {
    return s.join(" ");
  }

  if (l % 2 === 0) {
    i = l / 2 - 1;
  } else {
    i = parseInt(l / 2);
  }

  while (i >= 0) {
    [s[i], s[l - i - 1]] = [s[l - i - 1], s[i]];
    i--;
  }

  return s.join(" ");
};
// @lc code=end
