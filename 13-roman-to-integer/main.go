package main

var romanMap = map[string]int{
	"I":  1,
	"IV": 4,
	"V":  5,
	"IX": 9,
	"X":  10,
	"XL": 40,
	"L":  50,
	"XC": 90,
	"C":  100,
	"CD": 400,
	"D":  500,
	"CM": 900,
	"M":  1000,
}

func romanToInt(s string) int {
	stringLength := len(s)
	result := 0
	for index := 0; index < stringLength; index++ {
		if index == stringLength-1 {
			result += romanMap[string(s[index])]
		} else {
			current, okay := romanMap[string(s[index])+string(s[index+1])]
			if okay {
				result += current
				index++
			} else {
				result += romanMap[string(s[index])]
			}
		}
	}
	return result
}
