/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) {
    return 0;
  }
  if (x === 1) {
    return 1;
  }

  let l = 0,
    r = x,
    t;
  while (Math.abs(l - r) > 1) {
    t = parseInt((l + r) / 2);
    switch (true) {
      case Math.pow(t, 2) === x:
        return t;
      case Math.pow(t, 2) > x:
        r = t;
        break;
      case Math.pow(t, 2) < x:
        l = t;
        break;
      default:
        break;
    }
  }

  return parseInt((l + r) / 2);
};
// @lc code=end
