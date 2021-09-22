/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1比特与2比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  let flag = false;

  const dfs = function (arr) {
    if (flag) {
      return;
    }

    let l = arr.length;

    if (l === 1 && arr[0] === 0) {
      flag = true;
      return;
    }

    if (arr[0] === 0) {
      dfs(arr.slice(1));
    }
    if (arr[0] === 1 && (arr[1] === 0 || arr[1] === 1)) {
      dfs(arr.slice(2));
    }
  };

  dfs(bits);

  return flag;
};
// @lc code=end
