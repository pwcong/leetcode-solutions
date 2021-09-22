/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length <= 1) {
    return true;
  }

  function _canJump(start) {
    let l = nums.length,
      i = start;
    while (i < l) {
      i += nums[i];

      if (nums[i] === 0) {
        return i === l - 1;
      } else {
        if (i === l - 1) {
          return true;
        }
      }
    }

    return false;
  }

  if (_canJump(0)) {
    return true;
  }

  return _canJump(1);
};
// @lc code=end

console.log(canJump([1, 2, 3]));
