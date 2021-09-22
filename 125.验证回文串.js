/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s
    .split("")
    .filter((_s) => /[A-Za-z]|[0-9]/.test(_s))
    .map((_s) => _s.toLocaleLowerCase())
    .join("");

  let l = s.length,
    i,
    j;

  if (l <= 1) {
    return true;
  }

  if (l % 2 === 0) {
    i = parseInt(l / 2) - 1;
    j = parseInt(l / 2);
  } else {
    i = parseInt(l / 2) - 1;
    j = parseInt(l / 2) + 1;
  }

  for (i; i >= 0; i--, j++) {
    if (s[i] !== s[j]) {
      return false;
    }
  }

  return true;
};
// @lc code=end
