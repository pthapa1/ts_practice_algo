/*
Example 1:

Input: nums = [1,4,3,2]
Output: 4
Explanation: All possible pairings (ignoring the ordering of elements) are:
1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
So the maximum possible sum is 4.

Example 2:
Input: nums = [6,2,6,5,1,2]
[1, 2, 2, 5, 6, 6]
Output: 9
Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.
 
 * */
export function arrrayPartitioning(arr: number[]): number {
  arr.sort((a, b) => a - b);
  let sum = 0;
  // if the array's length is odd, then return 0
  if (arr.length % 2 !== 0) return sum;
  for (let i = 0; i < arr.length; i = i + 2) {
    sum += Math.min(arr[i], arr[i + 1]);
  }
  return sum;
}
