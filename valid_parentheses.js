// Problem: https://leetcode.com/problems/valid-parentheses/
// Solution: https://leetcode.com/submissions/detail/1084139848/
// Runtime: 57 ms, faster than 47.58% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 42.6 MB, less than 38.04% of JavaScript online submissions for Valid Parentheses.
// O(n) time, O(n) space
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const openBrackets = /[\(\{\[]/;
  if (!openBrackets.test(s[0])) {
    return false;
  }

  const stack = [];
  for (let char of s) {
    if (openBrackets.test(char)) {
      stack.push(char);
    } else {
      let topOfStack = stack[stack.length - 1];
      if (
        (topOfStack === "(" && char === ")") ||
        (topOfStack === "{" && char === "}") ||
        (topOfStack === "[" && char === "]")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
};
