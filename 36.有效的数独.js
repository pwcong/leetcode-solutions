/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rowCache = {};
  const colCache = {};
  const blockCache = {};

  for (let i = 0, l = board.length; i < l; i++) {
    const row = board[i];
    for (let j = 0, _l = row.length; j < _l; j++) {
      const rowNums = rowCache[i] || (rowCache[i] = {});
      const colNums = colCache[j] || (colCache[j] = {});

      const k = `${parseInt(i / 3)},${parseInt(j / 3)}`;
      const blockNums = blockCache[k] || (blockCache[k] = {});

      const t = row[j];
      if (t === ".") {
        continue;
      }

      if (rowNums[t] >= 1) {
        
        return false;
      } else {
        rowNums[t] = 1;
      }
      if (colNums[t] >= 1) {
        return false;
      } else {
        colNums[t] = 1;
      }
      if (blockNums[t] >= 1) {
        return false;
      } else {
        blockNums[t] = 1;
      }
    }
  }

  return true;
};
// @lc code=end
