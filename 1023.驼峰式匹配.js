/*
 * @lc app=leetcode.cn id=1023 lang=javascript
 *
 * [1023] 驼峰式匹配
 */

// @lc code=start
/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function (queries, pattern) {
  const match = function (query) {
    let p = pattern.split(""),
      t;
    query = query.split("").filter((s) => {
      t = p.shift();
      if (t === undefined) {
        return true;
      }

      if (s === t) {
        return false;
      } else {
        p.unshift(t);
        return true;
      }
    });

    return p.length <= 0 && query.findIndex((v) => v.toLowerCase() !== v) <= -1;
  };

  return queries.map((query) => match(query));
};
// @lc code=end
