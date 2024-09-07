const checkPalindrome = (
  stringValue: string,
  indexes: [number, number]
): string[] => {
  var [leftIndex, rightIndex] = indexes;
  var palindromeValue =
    leftIndex === rightIndex - 1
      ? [stringValue[leftIndex], stringValue[rightIndex]]
      : [
          stringValue[leftIndex],
          stringValue[leftIndex + 1],
          stringValue[rightIndex],
        ];
  while (1) {
    if (leftIndex === 0 || rightIndex === stringValue.length - 1) break;
    if (stringValue[--leftIndex] !== stringValue[++rightIndex]) break;
    palindromeValue.unshift(stringValue[leftIndex]);
    palindromeValue.push(stringValue[rightIndex]);
  }
  return palindromeValue;
};

function longestPalindrome(s: string): string {
  var index = 0;
  var longestPalindrome: string[] = [];
  while (index < s.length) {
    var currentPalindrome: string[] = [];
    if (s[index] === s[index + 2])
      currentPalindrome = checkPalindrome(s, [index, index + 2]);
    if (currentPalindrome.length > longestPalindrome.length)
      longestPalindrome = currentPalindrome;
    if (s[index] === s[index + 1])
      currentPalindrome = checkPalindrome(s, [index, index + 1]);
    if (currentPalindrome.length > longestPalindrome.length)
      longestPalindrome = currentPalindrome;
    index++;
  }
  if (longestPalindrome.length === 0 && s.length !== 0) return s[0];
  return longestPalindrome.join("");
}
