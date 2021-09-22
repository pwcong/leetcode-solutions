/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  let candyCate = Array.from(new Set(candyType).values());

  let l = candyType.length,
    _l = candyCate.length;
  return _l < l / 2 ? _l : l / 2;
};
// @lc code=end
