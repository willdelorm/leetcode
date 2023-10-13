// Problem: https://leetcode.com/problems/two-sum/
// Solution: https://leetcode.com/submissions/detail/1073107840/
// Runtime: 46 ms, faster than 97.37% of JavaScript online submissions for Two Sum.
// Memory Usage: 42.5 MB, less than 58.01% of JavaScript online submissions for Two Sum.
// O(n) time, O(n) space
// Time to write code: 37 sec
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] != null) {
      return [map[target - nums[i]], i];
    }
    map[nums[i]] = i;
  }
};
