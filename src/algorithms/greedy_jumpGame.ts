/**
 * @description https://leetcode.com/problems/jump-game-ii/description/
 * 
 ### Code Explanation with Example Walkthrough

The `jump` function calculates the minimum number of jumps needed to reach the last index of an array, where each element represents the maximum jump length from that position.

@example: `nums = [2, 3, 1, 1, 4]`
1. **Initialization**:
   - `jumpCount = 0`: Tracks the number of jumps made.
   - `currentJumpEnd = 0`: The farthest index reachable with the current jump.
   - `maxReachable = 0`: The farthest index reachable with the next jump.
   - `lastIndex = 4`: The last index of the array.

2. **Iteration**:
   - **Iteration 1 (`i = 0`)**:
     - `maxReachable = Math.max(0, 0 + 2) = 2`: From index 0, you can jump to index 1 or 2.
     - `i (0) === currentJumpEnd (0)`: Time to make a jump.
       - `jumpCount++`: Increment jumps to 1.
       - `currentJumpEnd = maxReachable (2)`: Update the end of the current jump range.

   - **Iteration 2 (`i = 1`)**:
     - `maxReachable = Math.max(2, 1 + 3) = 4`: From index 1, you can jump to index 2, 3, or 4.
     - `i (1) !== currentJumpEnd (2)`: Continue to the next index.

   - **Iteration 3 (`i = 2`)**:
     - `maxReachable = Math.max(4, 2 + 1) = 4`: From index 2, you can only jump to index 3.
     - `i (2) === currentJumpEnd (2)`: Time to make another jump.
       - `jumpCount++`: Increment jumps to 2.
       - `currentJumpEnd = maxReachable (4)`: Update the end of the current jump range.
       - `currentJumpEnd (4) >= lastIndex (4)`: Break the loop since we can reach the last index.

3. **Return**:
   - The function returns `jumpCount`, which is `2`.

### Summary
In this example, the minimum number of jumps required to reach the last index is `2`. The algorithm efficiently tracks the farthest reachable index and increments the jump count only when necessary, ensuring optimal performance.
 */

export function jumpGameII(nums: number[]): number {
  let jumpCount = 0;
  let coverage = 0; // current ranage's end
  let farthest = 0; // what's the maximum number in the range
  for (let i = 0; i < nums.length; i++) {
    if (nums.length === 1) return 0;
    farthest = Math.max(farthest, i + nums[i]);
    // if you have exhausted all the previous jumps
    if (i === coverage) {
      jumpCount++;
      coverage = farthest;
      if (coverage >= nums.length - 1) break; // if your coverage is >= destination
    }
  }
  return jumpCount;
}
/**
 * @description can the user make it till the end?
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
Return true if you can reach the last index, or false otherwise.
@example
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 * */
export function jumpGame(nums: number[]) {
  let coverage = 0;
  let farthest = 0; // if farthest you can jump from a point is stuck at an index that is not >= final Destination, then you can't reach the end
  for (let i = 0; i < nums.length; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === coverage) {
      coverage = farthest;
      if (coverage >= nums.length - 1) return true;
    }
  }

  return false;
}
