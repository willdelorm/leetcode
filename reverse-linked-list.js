// Problem: https://leetcode.com/problems/reverse-linked-list/
// Solution: https://leetcode.com/submissions/detail/1151170634/
// Runtime: 47 ms, faster than 94.15% of JavaScript online submissions.
// Memory Usage: 51.30 MB, less than 5.84% of JavaScript online submissions.
// O(n) time, O(1) space

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  if (!head || !head.next) return head;

  let last = new ListNode(head.val, null),
    current = head.next,
    next;

  while (current) {
    next = current.next;
    current.next = last;
    last = current;
    current = next;
  }
  return last;
};
