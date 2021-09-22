/*
 * @lc app=leetcode.cn id=1418 lang=javascript
 *
 * [1418] 点菜展示表
 */

// @lc code=start
/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
  // {
  //     '3': {
  //         'xxx': 1,
  //     }
  // }

  let foods = new Set(),
    table = {};

  orders.forEach((order) => {
    let n = order[1];
    let t = table[n];
    if (t === undefined) {
      t = table[n] = {};
    }

    let f = order[2];
    foods.add(f);
    t[f] = (t[f] || 0) + 1;
  });

  foods = Array.from(foods).sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
  return Object.keys(table)
    .map((n) => Number(n))
    .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
    .reduce((p, c, i) => {
      if (i === 0) {
        p.push(["Table", ...foods]);
      }

      p.push([`${c}`, ...foods.map((f) => `${(table[c] || {})[f] || 0}`)]);
      return p;
    }, []);
};
// @lc code=end
