/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) {
    return [];
  }

  let rows = [[1]];
  if (numRows === 1) {
    return rows;
  }

  let row = 1,
    p,
    t,
    i,
    l;
  while (row < numRows) {
    p = [];
    t = rows[row - 1];
    i = -1;
    l = t.length;

    while (i < l) {
      p.push((t[i] || 0) + (t[i + 1] || 0));
      i++;
    }

    row++;
    rows.push(p);
  }

  return rows;
};
// @lc code=end
