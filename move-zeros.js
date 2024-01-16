// Problem: https://leetcode.com/problems/move-zeroes/
// Solution: https://leetcode.com/submissions/detail/1148166822/
// Runtime: 77 ms, faster than 60.42% of JavaScript online submissions.
// Memory Usage: 46.38 MB, less than 74.94% of JavaScript online submissions.
// O(n) time, O(1) space

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length < 2) return nums;
  let zeroCount = 0;
  nums.forEach((num, i) => {
    if (num === 0) {
      zeroCount++;
    } else {
      if (zeroCount > 0) {
        nums[i - zeroCount] = num;
        nums[i] = 0;
      }
    }
  });
  return nums;
};
