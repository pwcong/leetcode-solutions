/*
 * @lc app=leetcode id=2 lang=golang
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (31.57%)
 * Likes:    5703
 * Dislikes: 1461
 * Total Accepted:    967.8K
 * Total Submissions: 3.1M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 *
 * Example:
 *
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 *
 *
 */
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	var root = &ListNode{}
	add(root, l1, l2, false)
	return root
}

func add(node *ListNode, _l1 *ListNode, _l2 *ListNode, p bool) {
	var t = _l1.Val + _l2.Val
	if p {
		t += 1
	}

	var _p = false
	if t >= 10 {
		_p = true
	}

	t = t % 10
	node.Val = t

	if _l1.Next != nil || _l2.Next != nil || _p {
		node.Next = &ListNode{}

		if _l1.Next == nil {
			_l1.Next = &ListNode{}
		}

		if _l2.Next == nil {
			_l2.Next = &ListNode{}
		}

		add(node.Next, _l1.Next, _l2.Next, _p)
	}

}

