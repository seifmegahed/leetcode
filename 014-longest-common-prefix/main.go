package main

func longestCommonPrefix(strs []string) string {
	result := ""
	for charIdx := 0; charIdx < len(strs[0]); charIdx++ {
		complies := true
		for stringIdx := 1; stringIdx < len(strs); stringIdx++ {
			if len(strs[stringIdx]) <= charIdx {
				complies = false
				break
			} else {
				if strs[0][charIdx] != strs[stringIdx][charIdx] {
					complies = false
					break
				}
			}
		}
		if complies {
			result += string(strs[0][charIdx])
		} else {
			break
		}
	}
	return result
}
