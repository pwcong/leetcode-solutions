/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let entries = [];
  let l = word.length;

  board.forEach((d, m) =>
    d.forEach((s, n) => {
      if (s === word[0]) {
        entries.push([m, n]);
      }
    })
  );

  if (l === 1) {
    return entries.length > 0;
  }

  let flag = false;

  const find = function (i, m, n, s, cache) {
    let t = (board[m] || [])[n] || "";

    if (t !== s) {
      return;
    }

    let k = `${m}_${n}`;
    if (cache[k]) {
      return;
    }

    cache[k] = true;

    if (i === l - 1) {
      flag = true;
      return;
    }

    find(i + 1, m + 1, n, word[i + 1], { ...cache });
    find(i + 1, m - 1, n, word[i + 1], { ...cache });
    find(i + 1, m, n + 1, word[i + 1], { ...cache });
    find(i + 1, m, n - 1, word[i + 1], { ...cache });
  };

  entries.forEach((entry) => {
    find(0, ...entry, word[0], {});
  });

  return flag;
};
// @lc code=end
