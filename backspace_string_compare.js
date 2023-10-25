// Problem: https://leetcode.com/problems/backspace-string-compare/
// Solution: https://leetcode.com/submissions/detail/1079461328/
// Runtime: 50 ms, faster than 77.75% of JavaScript online submissions for Backspace String Compare.
// Memory Usage: 42.5 MB, less than 61.72% of JavaScript online submissions for Backspace String Compare.
// O(n) time, O(n) space
// Time to write code: 45 sec
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  function processString(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "#") {
        arr.pop();
      } else {
        arr.push(str[i]);
      }
    }
    return arr.join("");
  }

  return processString(s) === processString(t);
};
