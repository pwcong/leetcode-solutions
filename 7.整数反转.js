/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let i,
    l,
    n,
    t,
    p = 1,
    s = x.toString().split('');

  if (s[0] === '-') {
    p = -1;
    s = s.slice(1);
  }

  l = s.length;
  n = parseInt(l / 2);

  for (i = 0; i < n; i++) {
    t = s[i];
    s[i] = s[l - i - 1];
    s[l - i - 1] = t;
  }

  const result = parseInt(s.join('')) * p;

  return result >= Math.pow(2, 31) * -1 && result <= Math.pow(2, 31) - 1
    ? result
    : 0;
};

// @lc code=end
