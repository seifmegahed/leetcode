function twoSum(nums: number[], target: number): number[] {
  var prevNumbers:number[] = [];
  var result:number[] = [];

  nums.forEach((number, index) => {
      var neededNumber = target - number;
      if(prevNumbers[neededNumber] != null) {
          result = [index, prevNumbers[neededNumber]]
          return;
      }
      else prevNumbers[number] = index;
  })
  return result;
};