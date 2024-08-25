/*
 https://leetcode.com/problems/find-peak-element/description/
A peak element is an element that is strictly greater than its neighbors.
Given a 0-indexed integer array nums, find a peak element, and return its index.
If the array contains multiple peaks, return the index to any of the peaks.
You may imagine that nums[-1] = nums[n] = -∞. 
In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
You must write an algorithm that runs in O(log n) time.

Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6. 

Constraints:
nums[i] != nums[i + 1] for all valid i.
[1,2,1,3,5,6,4]
*/
export function findPeakItem(nums: number[]) {
  let pL = 0;
  let pR = nums.length - 1;
  while (pL < pR) {
    // keep moving the pL left until pL and pR is same
    const middleIndex = Math.floor((pL + pR) / 2);
    // if the one on the right is greater than middle,
    if (nums[middleIndex] < nums[middleIndex + 1]) {
      // change the pL to the
      pL = middleIndex + 1;
    } else {
      pR = middleIndex;
    }
  }
  // when pL === pR, we've found the peak
  return pL;
}
