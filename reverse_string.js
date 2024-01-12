// Problem: https://leetcode.com/problems/reverse-string/
// Solution: https://leetcode.com/submissions/detail/1144588842/
// Runtime: 74 ms, faster than 82.46% of JavaScript online submissions.
// Memory Usage: 49.7 MB, less than 18.21% of JavaScript online submissions.
// O(n) time, O(1) space

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let temp = [""];
    for (let i = 0; i < s.length / 2; i++) {
        temp[0] = s[s.length - 1 - i];
        s[s.length - 1 - i] = s[i];
        s[i] = temp[0];
    }
};