/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.length <= 0) {
    return 0;
  }

  const _searchInsert = (n, v, i) => {
    const l = n.length;
    if (l <= 1) {
      const t = n[0];
      if (t === undefined) {
        return i;
      }
      return v <= t ? i : i + 1;
    }

    const n1 = n.slice(0, l / 2);
    const n2 = n.slice(l / 2, l);

    switch (true) {
      case v >= n2[0]:
        return _searchInsert(n2, v, i + parseInt(l / 2));
      case v >= n1[0]:
        return _searchInsert(n1, v, i);
      default:
        return i;
    }
  };

  return _searchInsert(nums, target, 0);
};
// @lc code=end
