/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) {
    return [1];
  }
};
// @lc code=end

//         1
//        1  1
//       1 2  1
//      1 3  3  1
//     1 4  6  4  1
//    1 5 10 10  5  1
//   1 6 15 20  15 6 1
