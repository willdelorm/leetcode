// Problem: https://leetcode.com/problems/longest-common-prefix/
// Solution: https://leetcode.com/submissions/detail/1079469936/
// Runtime: 39 ms, faster than 99.13% of JavaScript online submissions for Backspace String Compare.
// Memory Usage: 42.4 MB, less than 48.64% of JavaScript online submissions for Backspace String Compare.
// O(n^2) time, O(n) space
// Time to write code: 45 sec
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let longestPrefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    let matchingChar = strs[0][i];
    let doesMatch = true;
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== matchingChar) {
        doesMatch = false;
        break;
      }
    }
    if (doesMatch) {
      longestPrefix += matchingChar;
    } else {
      break;
    }
  }
  return longestPrefix;
};
