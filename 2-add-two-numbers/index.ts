/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

const getNumberArray = (list: ListNode): number[] | null =>
  list.next != null
      ? [list.val, ...getNumberArray(list.next)]
      : [list.val]

const arraySum = (arrayA, arrayB) => {
var carry = 0;
const result =
  arrayA.length > arrayB.length
    ? arrayA.map((value, index) => {
        const sum = value + (arrayB[index] ?? 0) + carry;
        sum > 9 ? (carry = 1) : (carry = 0);
        return sum - 10 * carry;
      })
    : arrayB.map((value, index) => {
        const sum = value + (arrayA[index] ?? 0) + carry;
        sum > 9 ? (carry = 1) : (carry = 0);
        return sum - 10 * carry;
      });
if (carry) return [...result, carry];
return result;
};

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  var resultArray: ListNode[] = []
  arraySum(
      getNumberArray(l1),
      getNumberArray(l2)
  ).forEach((value, index) => resultArray[index] = new ListNode(value))

  resultArray.forEach((list, index) => {
      if (index === resultArray.length - 1) return;
      list.next = resultArray[index + 1];
  })
  return resultArray[0];
};