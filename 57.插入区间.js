/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  intervals = intervals
    .concat([newInterval])
    .sort((a, b) => (a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0));

  let l = intervals.length;

  if (l <= 1) {
    return intervals;
  }

  const Node = function (min, max) {
    this.min = min;
    this.max = max;
    this.next = null;
  };

  let root,
    p,
    i = 0,
    t;
  while (i < l) {
    t = new Node(intervals[i][0], intervals[i][1]);
    if (!p) {
      root = p = t;
    } else {
      if (t.min >= p.min && t.min <= p.max) {
        p.max = p.max > t.max ? p.max : t.max;
      } else {
        p.next = t;
        p = t;
      }
    }

    i++;
  }

  const result = [];
  p = root;
  while (p) {
    result.push([p.min, p.max]);
    p = p.next;
  }
  return result;
};
// @lc code=end
