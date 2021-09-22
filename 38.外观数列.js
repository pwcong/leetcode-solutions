/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  function _countAndSay(s) {
    let c = 0,
      p = s[0],
      i = 0,
      t = "",
      l = s.length;

    while (i <= l) {
      if (p !== s[i]) {
        t += `${c}${p}`;
        c = 1;
        p = s[i];
      } else {
        c++;
      }
      i++;
    }

    return t;
  }

  let s = `1`;
  while (n > 1) {
    s = _countAndSay(s);
    n--;
  }

  return s;
};
// @lc code=end
