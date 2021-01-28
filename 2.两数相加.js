/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const result = new ListNode();
  let l = result,
    p;
  let flag = false;
  while (l1 || l2) {
    l1 = l1 || new ListNode();
    l2 = l2 || new ListNode();

    l.val = l1.val + l2.val;

    if (flag) {
      l.val++;
      flag = false;
    }

    if (l.val >= 10) {
      l.val %= 10;
      flag = true;
    }

    l1 = l1.next;
    l2 = l2.next;

    p = l;
    l.next = new ListNode();
    l = l.next;
  }

  if (flag) {
    l.val = 1;
  }

  if (l.val === 0) {
    p.next = null;
  }

  return result;
};

// @lc code=end
