/*
A solution that has not been optimized for time complexity.
*/

// running sum of 1d array. Input: [1, 2, 3, 4] => [1, 3, 6, 4]
export function runningSumOf2DArray(arr: number[]): number[] {
  const output: number[] = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    output.push(arr[i]);
  }
  return output;
}

/*
Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.
The value of |x| is defined as:

x if x >= 0.
-x if x < 0.

Example 1:
Input: nums = [1,2,2,1], k = 1
Output: 4
Explanation: The pairs with an absolute difference of 1 are:
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]

Example 2:
Input: nums = [1,3], k = 3
Output: 0
Explanation: There are no pairs with an absolute difference of 3.

Example 3:
Input: nums = [3,2,1,5,4], k = 2
Output: 3
Explanation: The pairs with an absolute difference of 2 are:
- [3,2,1,5,4]
- [3,2,1,5,4]
- [3,2,1,5,4]
 */
export function findPairWithAbsoluteDifference(
  arr: number[],
  target: number,
): number {
  let output = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // arr[i] - arr[j] === -1 * target || arr[i] - arr[j] === target
      if (Math.abs(arr[i] - arr[j]) === target) {
        output++;
      }
    }
  }
  return output;
}

/**
1 -/+ 1 = 0 / 2
2 = 1/2
2 = 1/3
1 = 0 / 2
//once we do that 
//add current to the hash map. 
 * */

/**
 * @description: Optimized solution with a hashmap.
 * */
export function findPairWithAbsoluteDifferenceOptimized(
  arr: number[],
  target: number,
) {
  let output = 0;
  const seen = new Map<number, boolean>(); // keep track of we  processed
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    if (seen.has(curr - target)) output++;
    if (seen.has(curr + target)) output++;
    seen.set(curr, true);
  }
  return output;
}
