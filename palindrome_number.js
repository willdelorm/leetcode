// Problem: https://leetcode.com/problems/palindrome-number/
// Solution:
// Runtime: 46 ms, faster than 97.37% of JavaScript online submissions for Two Sum.
// Memory Usage: 42.5 MB, less than 58.01% of JavaScript online submissions for Two Sum.
// O(n) time, O(n) space
// Time to write code: 37 sec
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  return x == String(x).split("").reverse().join("");
};
