/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  version1 = version1.split(".");
  version2 = version2.split(".");

  let l = Math.max(version1.length, version2.length),
    i = 0,
    v1,
    v2;

  while (i < l) {
    v1 = parseInt(version1[i] || "0");
    v2 = parseInt(version2[i] || "0");

    if (v1 > v2) {
      return 1;
    }
    if (v1 < v2) {
      return -1;
    }

    i++;
  }

  return 0;
};
// @lc code=end
