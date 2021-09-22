/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let l = digits.length;
  let p = false;

  digits[l - 1]++;

  while (l > 0) {
    if (p) {
      digits[l - 1]++;
      p = false;
    }

    if (digits[l - 1] >= 10) {
      digits[l - 1] %= 10;
      p = true;
    }

    l--;
  }

  if (p) {
    digits.unshift(1);
  }

  return digits;
};
// @lc code=end
