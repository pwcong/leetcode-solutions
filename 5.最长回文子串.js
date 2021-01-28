/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let left,
    right,
    i,
    j,
    n = 0,
    cache = [],
    maxLen = 0,
    maxStr = '',
    l = s.length;

  if (l === 1) {
    return s;
  }

  if (l === 2) {
    return s[0] === s[1] ? s : s[0];
  }

  for (i = 0; i < l - 1; i++) {
    left = i - 1;

    cache = [s[i]];
    for (j = i + 1; i < l; j++) {
      right = j;
      if (s[i] === s[j]) {
        cache.push(s[j]);
      } else {
        break;
      }
    }

    for (left, right; left >= 0 && right <= l; left--, right++) {
      if (s[left] !== s[right]) {
        break;
      } else {
        cache.unshift(s[left]);
        cache.push(s[right]);
      }
    }

    n = cache.length;
    if (n > maxLen) {
      maxLen = n;
      maxStr = cache.join('');
    }
  }

  return maxStr;
};

// @lc code=end
