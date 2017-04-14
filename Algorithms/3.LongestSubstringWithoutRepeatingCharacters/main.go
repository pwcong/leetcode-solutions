package main

import "fmt"

func lengthOfLongestSubstring(s string) int {

	len := len(s)
	res := 0

	if len == 0 || len == 1 {
		return len
	}

	for i, j := 0, 0; i < len-res && j < len; j++ {

		k := i

		for ; k < j; k++ {
			if s[k] == s[j] {
				break
			}
		}

		if k != j {
			i = k + 1
		}

		t := j - i + 1
		if t > res {
			res = t
		}

	}

	return res
}

func main() {
	fmt.Println(lengthOfLongestSubstring("dvda"))
}
