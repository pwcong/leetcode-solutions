/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let stack = [],
    stackIndex = 0,
    i = 0,
    l = path.length,
    t = "",
    n = "";

  while (i <= l) {
    t = path[i];

    switch (t) {
      case undefined:
      case "/":
        if (n !== "") {
          if (n === ".") {
            // DO NOTHING
          } else if (n === "..") {
            if (stackIndex > 0) {
              stackIndex--;
            }
          } else {
            stack[stackIndex] = n;
            stackIndex++;
          }
        }
        n = "";
        i++;
        break;
      default:
        n += t;
        i++;
        break;
    }
  }

  return `/${stack.slice(0, stackIndex).join("/")}`;
};
// @lc code=end
