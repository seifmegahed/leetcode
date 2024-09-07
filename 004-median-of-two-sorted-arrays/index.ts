const isEven = (value: number): boolean =>
  value === 0 || !!(value && !(value % 2));

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  var index1 = 0;
  var index2 = 0;
  var combined: number[] = [];

  while (index1 < nums1.length && index2 < nums2.length) {
    const num1 = nums1[index1];
    const num2 = nums2[index2];
    if (num1 === num2) {
      combined.push(num1);
      combined.push(num2);
      index1++;
      index2++;
    } else if (num1 < num2) {
      combined.push(num1);
      index1++;
    } else {
      combined.push(num2);
      index2++;
    }
  }
  if (index1 < nums1.length) combined = [...combined, ...nums1.slice(index1)];
  if (index2 < nums2.length) combined = [...combined, ...nums2.slice(index2)];

  if (isEven(combined.length)) {
    const half = combined.length / 2;
    return (combined[half] + combined[half - 1]) / 2;
  } else return combined[Math.round(combined.length / 2) - 1];
}
