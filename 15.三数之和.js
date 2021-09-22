/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // const l = nums.length;
  // if (l < 3) {
  //   return [];
  // }

  // nums = nums.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));

  // let left, right, current, t;
  // const result = [];
  // for (let i = 0; i < l - 2; i++) {
  //   current = nums[i];
  //   left = i + 1;
  //   right = l - 1;
  //   while (left < right) {
  //     t = current + nums[left] + nums[right];

  //     switch (true) {
  //       case t === 0:
  //         result.push([current, nums[left], nums[right]]);
  //         right--;
  //         break;
  //       case t > 0:
  //         right--;
  //         break;
  //       case t < 0:
  //         left++;
  //         break;
  //       default:
  //         right--;
  //         break;
  //     }
  //   }
  // }

  // const cache = {};
  // return result.filter((d) => {
  //   t = d.join(",");
  //   if (cache[t]) {
  //     return false;
  //   }
  //   cache[t] = true;
  //   return true;
  // });

  let n = nums.length;
  nums = nums.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));

  const ans = [];
  // 枚举 a
  for (let first = 0; first < n; ++first) {
    // 需要和上一次枚举的数不相同
    if (first > 0 && nums[first] == nums[first - 1]) {
      continue;
    }
    // c 对应的指针初始指向数组的最右端
    let third = n - 1;
    const target = -nums[first];
    // 枚举 b
    for (let second = first + 1; second < n; ++second) {
      // 需要和上一次枚举的数不相同
      if (second > first + 1 && nums[second] == nums[second - 1]) {
        continue;
      }
      // 需要保证 b 的指针在 c 的指针的左侧
      while (second < third && nums[second] + nums[third] > target) {
        --third;
      }
      // 如果指针重合，随着 b 后续的增加
      // 就不会有满足 a+b+c=0 并且 b<c 的 c 了，可以退出循环
      if (second == third) {
        break;
      }
      if (nums[second] + nums[third] == target) {
        const list = [];
        list.push(nums[first]);
        list.push(nums[second]);
        list.push(nums[third]);
        ans.push(list);
      }
    }
  }
  return ans;
};
// @lc code=end
