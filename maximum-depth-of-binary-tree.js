// Problem: https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Solution: https://leetcode.com/submissions/detail/1148099561/
// Runtime: 49 ms, faster than 96.72% of JavaScript online submissions.
// Memory Usage: 45.5 MB, less than 28.24% of JavaScript online submissions.
// O(n) time, O(k) space where k is the height of the tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(...digDeeper(root, [], 0));
};

function digDeeper(node, depths, level) {
  level++;
  if (!node.left && !node.right) {
    depths.push(level);
    return depths;
  }
  if (node.left) {
    digDeeper(node.left, depths, level);
  }
  if (node.right) {
    digDeeper(node.right, depths, level);
  }
  return depths;
}
