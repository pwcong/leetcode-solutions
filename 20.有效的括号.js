/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  let t;
  (s || "").split("").forEach((_s) => {
    t = stack.pop();
    if (map[t] === _s) {
      return;
    }

    t !== undefined && stack.push(t);
    stack.push(_s);
  });

  return stack.length === 0;
};
// @lc code=end
