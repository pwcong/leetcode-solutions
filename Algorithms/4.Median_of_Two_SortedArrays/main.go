package main

import "fmt"

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {

	len1 := len(nums1)
	len2 := len(nums2)

	if len1 == 0 && len2 == 0 {
		return 0
	}
	if len1 != 0 && len2 == 0 {
		if len1%2 == 0 {
			return float64(nums1[len1/2]+nums1[len1/2-1]) / 2
		}
		return float64(nums1[len1/2])
	}
	if len1 == 0 && len2 != 0 {
		if len2%2 == 0 {
			return float64(nums2[len2/2]+nums2[len2/2-1]) / 2
		}
		return float64(nums2[len2/2])
	}

	arr := []int{}
	flag := nums1[0] <= nums2[0]

	i := 0
	j := 0
	for i < len1 || j < len2 {

		if flag && i < len1 {
			arr = append(arr, nums1[i])
			i++
		}

		if !flag && j < len2 {
			arr = append(arr, nums2[j])
			j++
		}

		if i < len1 && j < len2 {
			flag = nums1[i] <= nums2[j]
		}

		if i >= len1 {
			flag = false
		}

		if j >= len2 {
			flag = true
		}

	}

	t := len1 + len2

	if t%2 == 0 {
		return float64(arr[t/2]+arr[t/2-1]) / 2
	}

	return float64(arr[t/2])

}

func main() {

	fmt.Println(findMedianSortedArrays([]int{}, []int{3, 4}))

}
