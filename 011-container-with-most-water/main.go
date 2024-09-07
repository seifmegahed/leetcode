package main

func maxArea(height []int) int {
	result := 0
	left := 0
	right := len(height) - 1
	for left != right {
		area := 0
		if height[left] > height[right] {
			area = height[right] * (right - left)
			right--
		} else {
			area = height[left] * (right - left)
			left++
		}
		if area > result {
			result = area
		}
	}
	return result
}
