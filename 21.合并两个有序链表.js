/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
var mergeTwoLists = function (l1, l2) {
  // function ListNode(val, next) {
  //   this.val = val === undefined ? 0 : val;
  //   this.next = next === undefined ? null : next;
  // }

  // const convertToListNode = (l) => {
  //   const root = new ListNode(l[0]);
  //   l.slice(1).reduce((p, c) => {
  //     const next = new ListNode(c);
  //     p.next = next;
  //     return next;
  //   }, root);
  //   return root;
  // };

  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }

  // let l1 = convertToListNode(l1);
  // let l2 = convertToListNode(l2);

  let root, p, q, t;
  if (l1.val <= l2.val) {
    root = p = l1;
    q = l2;
  } else {
    root = p = l2;
    q = l1;
  }

  while (p !== null) {
    if (p.next !== null) {
      if (q !== null) {
        if (p.next.val >= q.val) {
          t = p.next;
          p.next = q;
          p = q;
          q = t;
        } else {
          p = p.next;
        }
      } else {
        p = p.next;
      }
    } else {
      if (q !== null) {
        p.next = q;
        p = p.next;
        q = null;
      } else {
        p = null;
      }
    }
  }

  return root;

  // const result = [];
  // while (root !== null) {
  //   result.push(root.val);
  //   root = root.next;
  // }

  // return result;
};
// @lc code=end
