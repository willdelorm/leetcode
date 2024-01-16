// Problem: https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Solution: https://leetcode.com/submissions/detail/1148099561/
// Runtime: 78 ms, faster than 56.33% of JavaScript online submissions.
// Memory Usage: 46.8 MB, less than 38.26% of JavaScript online submissions.
// O(n) time, O(1) space

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  return nums.sort((a, b) => {
    if (a === 0 && b !== 0) {
      return 1;
    } else if (a !== 0 && b === 0) {
      return -1;
    } else {
      return 0;
    }
  });
};
