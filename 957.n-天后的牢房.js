/*
 * @lc app=leetcode.cn id=957 lang=javascript
 *
 * [957] N 天后的牢房
 */

// @lc code=start
/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function (cells, n) {
  cells = cells.join("");
  n = n % 14;
  if (!n) {
    n = 14;
  }

  let l = cells.length,
    newCells = cells,
    cache = {};
  while (n > 0) {
    newCells = "";

    if (cache[cells] !== undefined) {
      newCells = cache[cells];
      cells = cache[cells];
    } else {
      for (let i = 0; i < l; i++) {
        if (i === 0 || i === l - 1) {
          newCells += "0";
        } else {
          if (
            (cells[i - 1] === "1" && cells[i + 1] === "1") ||
            (cells[i - 1] === "0" && cells[i + 1] === "0")
          ) {
            newCells += "1";
          } else {
            newCells += "0";
          }
        }
      }

      cache[cells] = newCells;
      cells = newCells;
    }

    n--;
  }

  return newCells.split("");
};
// @lc code=end
