/*
 * @lc app=leetcode id=1 lang=golang
 *
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (44.42%)
 * Likes:    11532
 * Dislikes: 395
 * Total Accepted:    2M
 * Total Submissions: 4.6M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 *
 * Example:
 *
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 *
 *
 */
func twoSum(nums []int, target int) []int {
	var i int
	var l = len(nums)
	var nm = map[int]int{}

	for i = 0; i < l; i++ {
		nm[nums[i]] = i
	}

	for i = 0; i < l; i++ {
		t, ok := nm[target-nums[i]]
		if ok && t != i {
			if t > i {
				return []int{i, t}
			} else {
				return []int{t, i}
			}
		}
	}

	return []int{-1, -1}
}

