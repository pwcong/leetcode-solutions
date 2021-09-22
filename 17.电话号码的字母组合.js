/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const keys = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const _letterCombinations = function (a, b) {
    const result = [];
    for (let i = 0, l = a.length; i < l; i++) {
      for (let j = 0, _l = b.length; j < _l; j++) {
        result.push(`${a[i]}${b[j]}`);
      }
    }

    return result;
  };

  digits = digits.split("");

  if (digits.length <= 1) {
    return digits
      .map((k) => keys[k])
      .reduce((p, c) => {
        return p.concat(c);
      }, []);
  }

  return digits.slice(1).reduce((p, c) => {
    return _letterCombinations(p, keys[c]);
  }, keys[digits[0]]);
};
// @lc code=end
