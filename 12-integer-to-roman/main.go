package main

func intToRoman(num int) string {
	result := ""
	for num != 0 {
		switch {
		case num >= 1000:
			result += "M"
			num -= 1000
		case num >= 900:
			result += "CM"
			num -= 900
		case num >= 500:
			result += "D"
			num -= 500
		case num >= 400:
			result += "CD"
			num -= 400
		case num >= 100:
			result += "C"
			num -= 100
		case num >= 90:
			result += "XC"
			num -= 90
		case num >= 50:
			result += "L"
			num -= 50
		case num >= 40:
			result += "XL"
			num -= 40
		case num >= 10:
			result += "X"
			num -= 10
		case num >= 9:
			result += "IX"
			num -= 9
		case num >= 5:
			result += "V"
			num -= 5
		case num >= 4:
			result += "IV"
			num -= 4
		default:
			result += "I"
			num--
		}
	}
	return result
}
