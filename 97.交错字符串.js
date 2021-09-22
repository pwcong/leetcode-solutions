/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (!s1 || !s2) {
    return (s1 || s2) === s3;
  }

  let flag = false,
    t = "";

  const _isInterleave = function (a, b, s, i) {
    if (flag) {
      return;
    }

    if (a.length <= 0 && b.length <= 0) {
      s === s3 && (flag = true);
      return;
    }

    if (a.length) {
      t = a[0];
      if (t === s3[i]) {
        _isInterleave(a.slice(1), b, `${s}${t}`, i + 1);
      }
    }
    if (b.length) {
      t = b[0];
      if (t === s3[i]) {
        _isInterleave(a, b.slice(1), `${s}${t}`, i + 1);
      }
    }
  };

  _isInterleave(s1.split(""), s2.split(""), "", 0);

  return flag;
};
// @lc code=end
