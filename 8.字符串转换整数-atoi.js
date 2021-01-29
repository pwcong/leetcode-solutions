/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  s = s.trim();

  let i,
    l = s.length,
    t,
    p,
    arr = [],
    dict = Array.from(new Array(10)).reduce((p, _, i) => {
      p[i] = true;
      return p;
    }, {});
  for (i = 0; i < l; i++) {
    t = s[i];

    if (t === '+' || t === '-') {
      if (i === 0 && p === undefined) {
        p = t;
      } else {
        break;
      }
    } else {
      if (dict[t] === true) {
        arr.push(t);
      } else {
        break;
      }
    }
  }

  const n = parseInt(arr.join('')) * (p === '-' ? -1 : 1);

  const max = Math.pow(2, 31) - 1;
  const min = Math.pow(2, 31) * -1;

  return n < min ? min : n > max ? max : isNaN(n) ? 0 : n;
};

// @lc code=end
