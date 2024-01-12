// Problem: https://leetcode.com/problems/single-number/
// Solution: https://leetcode.com/submissions/detail/1144602356/
// Runtime: 57 ms, faster than 75.86% of JavaScript online submissions.
// Memory Usage: 47.2 MB, less than 26.19% of JavaScript online submissions.
// O(n) time, O(n) space

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const counts = {};
    nums.forEach(num => {
        if(counts[num]) counts[num] += 1;
        else counts[num] = 1;
    });
    let keys = Object.keys(counts);
    return keys.filter(key => counts[key] === 1)[0];
};