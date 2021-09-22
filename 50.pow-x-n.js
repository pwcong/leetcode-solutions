/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  const _x = x;
  let _n = Math.abs(n);

  if (_n === 0) {
    return 1;
  }

  while (_n > 1) {
    x = x * _x;
    _n--;
  }

  return n > 0 ? x : 1 / x;
};
// @lc code=end
