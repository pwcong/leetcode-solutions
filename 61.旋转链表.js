/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) {
    return head;
  }

  let p = head,
    q = head;
  c = 1;
  while (q.next !== null) {
    q = q.next;
    c++;
  }

  q.next = p;

  let i = 0,
    t = c - (k % c);
  while (i < t) {
    p = p.next;
    q = q.next;
    i++;
  }

  q.next = null;
  return p;
};
// @lc code=end
