function lengthOfLongestSubstring(s: string): number {
  const substringLetters = new Set<string>();
  var startIndex = 0;
  var endIndex = 0;
  var longestLength = 0
  while(endIndex < s.length){
      if(!substringLetters.has(s[endIndex])){
          substringLetters.add(s[endIndex++]);
          longestLength = Math.max(longestLength , substringLetters.size)
      } else {
          substringLetters.delete(s[startIndex++])
      }
  }
  return longestLength;
};
