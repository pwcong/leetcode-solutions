/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }

  num1 = num1.split("").reverse();
  num2 = num2.split("").reverse();

  const nums = [];
  for (let i = 0, l = num2.length; i < l; i++) {
    for (let j = 0, _l = num1.length; j < _l; j++) {
      const _nums = nums[j + i] || (nums[j + i] = []);
      _nums.push(num2[i] * num1[j]);
    }
  }

  let result = [],
    p = 0;
  for (let v of nums) {
    const t = v.reduce((p, c) => {
      return p + c;
    }, p);

    p = parseInt(t / 10);
    result.push(t % 10);
  }

  while (p > 0) {
    result.push(p % 10);
    p = parseInt(p / 10);
  }

  return result.reverse().join("");
};
// @lc code=end
