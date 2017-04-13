package main

import "fmt"

func twoSum(nums []int, target int) []int {

	for i := 0; i < len(nums)-1; i++ {

		for j := i + 1; j < len(nums); j++ {

			if nums[i]+nums[j] == target {
				return []int{i, j}
			}

		}

	}

	return []int{}

}

func main() {

	nums := []int{-1, -2, -3, -4, -5}
	target := -8

	res := twoSum(nums, target)
	if res != nil {
		fmt.Println(res)
	}

}
