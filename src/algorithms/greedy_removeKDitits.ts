/**
 * @description  Remove K digits
Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.

Example 1:
Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

Example 2:
Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.

Example 3:
Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
 * */
function removeKdigits_wrongApproach(num: string, k: number) {
  let minNum = Number.POSITIVE_INFINITY;
  for (let i = 0; i < num.length; i++) {
    let stringToRemove = "";
    for (let j = 0; j < k; j++) {
      stringToRemove += num[i + j];
    }
    const numsAfterItem = Number(num.replace(stringToRemove, ""));
    minNum = Math.min(minNum, numsAfterItem);
  }
  return String(minNum);
}
// my mistake was thinking that we are removing consecutive 3 numbers. But the problem never states that.// Test case where this fails, num = 10001 k = 4
// I thought about removing the largest characters but that presents the same issue. It does not gurantee the smallest return. 10200, k = 1
// Instead, it turns out that my next hunch was right. Create an empty array, loop over the num. Push each item in the array, if the item we have in an array
// is greater than current, remove (pop the item in the array) and add the current one in
function removeKdigits(num: string, k: number) {
  const stack = [];
  let counter = k;
  for (let i = 0; i < num.length; i++) {
    while (
      stack.length > 0 &&
      counter > 0 &&
      stack[stack.length - 1] > num[i]
    ) {
      counter--;
      stack.pop();
    }
    stack.push(num[i]);
  }
  // if all the item in the array is in ascending order then we end up removing nothing
  while (counter > 0) {
    stack.pop();
    counter--;
  }
  return String(Number(stack.join("")));
}
