/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let badApples = [],
    badNums = 0,
    goodNums = 0,
    counter = 0;

  grid.forEach((row, i) =>
    row.forEach((apple, j) => {
      switch (apple) {
        case 0:
          break;
        case 1:
          goodNums++;
          break;
        case 2:
          badNums++;
          badApples.push([i, j]);
          break;
        default:
          break;
      }
    })
  );

  let _badNums;

  while (goodNums > 0 && _badNums !== badNums) {
    _badNums = badNums;

    badApples.forEach((apple) => {
      let top = (grid[apple[0]] || [])[apple[1] - 1];
      let bottom = (grid[apple[0]] || [])[apple[1] + 1];
      let left = (grid[apple[0] - 1] || [])[apple[1]];
      let right = (grid[apple[0] + 1] || [])[apple[1]];

      if (top === 1) {
        goodNums--;

        (grid[apple[0]] || [])[apple[1] - 1] = 2;
        badApples.push([apple[0], apple[1] - 1]);
        badNums++;
      }
      if (bottom === 1) {
        goodNums--;
        (grid[apple[0]] || [])[apple[1] + 1] = 2;
        badApples.push([apple[0], apple[1] + 1]);
        badNums++;
      }
      if (left === 1) {
        goodNums--;
        (grid[apple[0] - 1] || [])[apple[1]] = 2;
        badApples.push([apple[0] - 1, apple[1]]);
        badNums++;
      }
      if (right === 1) {
        goodNums--;
        (grid[apple[0] + 1] || [])[apple[1]] = 2;
        badApples.push([apple[0] + 1, apple[1]]);
        badNums++;
      }
    });
    counter++;
  }

  return goodNums <= 0 ? counter : -1;
};
// @lc code=end
