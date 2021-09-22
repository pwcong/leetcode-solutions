/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const l = strs.length;
  if (l <= 1) {
    return strs.join("");
  }

  const getPrefix = (a, b) => {
    if (!a || !b) {
      return "";
    }

    let i = 0;
    while (true) {
      if ((a[i] === undefined && b[i] === undefined) || a[i] !== b[i]) {
        return a.substring(0, i);
      }
      i++;
    }
  };

  let prefix = strs[0];
  for (let i = 1; i < l; i++) {
    prefix = getPrefix(prefix, strs[i]);
  }
  return prefix;
};
// @lc code=end
