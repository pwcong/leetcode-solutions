/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let i,
    l = s.length,
    r = 0,
    t = 1,
    arrs = Array.from(new Array(numRows)).map(() => []);

  for (i = 0; i < l; i++) {
    arrs[r].push(s[i]);

    if (numRows - 1 === 0) {
      t = 0;
    } else if (r === 0) {
      t = 1;
    } else if (r === numRows - 1) {
      t = -1;
    }

    r += t;
  }

  return arrs.map((d) => d.join('')).join('');
};

// @lc code=end
