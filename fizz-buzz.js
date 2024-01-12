// Problem: https://leetcode.com/problems/fizz-buzz/
// Solution: https://leetcode.com/submissions/detail/1144595454/
// Runtime: 57 ms, faster than 66.19% of JavaScript online submissions.
// Memory Usage: 43.7 MB, less than 95.61% of JavaScript online submissions.
// O(n) time, O(n) space

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
        let n = "";
        if (i % 3 === 0) n += "Fizz";
        if (i % 5 === 0) n += "Buzz";
        answer.push(n.length > 0 ? n : String(i));
    }
    return answer;
};