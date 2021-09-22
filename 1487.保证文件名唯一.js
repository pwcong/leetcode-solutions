/*
 * @lc app=leetcode.cn id=1487 lang=javascript
 *
 * [1487] 保证文件名唯一
 */

// @lc code=start
/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
  const cache = {};

  return names.map((name) => {
    let count = cache[name];

    if (count === undefined) {
      cache[name] = 0;
      return name;
    }

    let t;
    while (cache[(t = `${name}(${++count})`)] !== undefined) {
      // DO NOTHING
    }

    cache[name] = count;
    if (cache[t] === undefined) {
      cache[t] = 0;
    } else {
      cache[t]++;
    }

    return `${name}(${count})`;
  });
};
// @lc code=end
