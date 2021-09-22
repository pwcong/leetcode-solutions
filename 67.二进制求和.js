/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let al = a.length,
    bl = b.length,
    i = 0,
    res = "",
    t = "";

  let flag = false;
  const map = {
    0: 0,
    1: 1,
  };
  while (i < al || i < bl) {
    t = map[a[al - i - 1] || 0] + map[b[bl - i - 1] || 0];
    if (flag) {
      t += 1;
      flag = false;
    }

    if (t > 1) {
      t %= 2;
      flag = true;
    }

    res = `${t}${res}`;
    i++;
  }

  if (flag) {
    res = "1" + res;
  }

  return res;
};
// @lc code=end
