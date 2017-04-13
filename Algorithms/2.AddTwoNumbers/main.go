package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {

	res := &ListNode{}

	plus := false
	h := res

	for h != nil {

		if l1 != nil && l2 != nil {
			h.Val = l1.Val + l2.Val
		} else if l1 != nil {
			h.Val = l1.Val
		} else if l2 != nil {
			h.Val = l2.Val
		}

		if plus {
			h.Val++
			plus = false
		}

		if h.Val >= 10 {
			h.Val %= 10
			plus = true
		}

		if l1 != nil {
			l1 = l1.Next
		}

		if l2 != nil {
			l2 = l2.Next
		}

		if l1 != nil || l2 != nil || plus {
			t := &ListNode{}
			h.Next = t
			h = t
		} else {
			h = nil
		}

	}

	return res
}

func getVal(ln *ListNode) int {

	if ln != nil {
		return ln.Val
	}
	return 0

}

func showResult(l1 *ListNode, l2 *ListNode, res *ListNode) {

	fmt.Printf("%d -> %d -> %d\n", getVal(l1), getVal(l2), getVal(res))

	if l1 != nil {
		l1 = l1.Next
	}
	if l2 != nil {
		l2 = l2.Next
	}
	if res != nil {
		res = res.Next
	}

	if l1 != nil || l2 != nil || res != nil {
		showResult(l1, l2, res)
	}

}

func getNil() *ListNode {
	return nil
}

func main() {

	n1 := &ListNode{1, &ListNode{2, &ListNode{3, nil}}}
	n2 := &ListNode{2, &ListNode{8, nil}}

	res := addTwoNumbers(n1, n2)

	showResult(n1, n2, res)

}
