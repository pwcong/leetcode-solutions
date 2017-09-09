package main

import "fmt"

func longestPalindrome(s string) string {

	l := len(s)

	if l <= 1 {
		return s
	}

	var max int
	var start int
	var end int

	for i := 0; i < l-1; i++ {

		for j := l - 1; j > i; j-- {

			t := i
			k := j
			for ; k >= t; k-- {
				if s[k] != s[t] {
					break
				}
				t++
			}

			if k <= t && j-i > max {
				max = j - i
				start = i
				end = j
			}

		}

	}

	return s[start : end+1]

}

func main() {

	fmt.Println(longestPalindrome("babad"))
	fmt.Println(longestPalindrome("cbbd"))

}
