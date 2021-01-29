/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let i = 0,
    l = x.toString().length,
    t,
    n = parseInt(l / 2),
    _x = 0;

  if (l === 1) {
    return true;
  }

  for (i; i < n; i++) {
    t = x % 10;
    x = parseInt(x / 10);
    _x = _x * 10 + t;
  }

  return l % 2 === 0 ? x === _x : parseInt(x / 10) === _x;
};

// @lc code=end
