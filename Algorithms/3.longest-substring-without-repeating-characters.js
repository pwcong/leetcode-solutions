/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (28.70%)
 * Likes:    6057
 * Dislikes: 348
 * Total Accepted:    1M
 * Total Submissions: 3.6M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 *
 *
 * Example 1:
 *
 *
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 *
 *
 * Example 2:
 *
 *
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 *
 *
 * Example 3:
 *
 *
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 *
 *
 *
 *
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  s = s || ''

  if (s.length <= 1) {
    return s.length
  }

  var t = '',
    m = {},
    i,
    j,
    ml = 1

  for (i = 0; i < s.length; i++) {
    t = s[i]
    m[s[i]] = true

    for (j = i + 1; j < s.length; j++) {
      if (m[s[j]]) {
        m = {}
        i = j - 1
        break
      }
      m[s[j]] = true
      t += s[j]
      if (t.length > ml) {
        ml = t.length
      }
    }
  }

  return ml
}
