/**
 * @description https://leetcode.com/problems/jump-game-ii/description/
 * */

function jump(nums: number[]): number {
  let jumpCount = 0;
  let coverage = 0; // current ranage's end
  let farthest = 0; // what's the maximum number in the range
  const lastIndex = nums.length - 1;
  for (let i = 0; i < lastIndex; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    // if you have exhausted all the previous jumps
    if (i === coverage) {
      jumpCount++;
      coverage = farthest;
      if (coverage >= lastIndex) break;
    }
  }
  return jumpCount;
}
/*
 ### Code Explanation with Example Walkthrough

The `jump` function calculates the minimum number of jumps needed to reach the last index of an array, where each element represents the maximum jump length from that position.

#### Example: `nums = [2, 3, 1, 1, 4]`

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
 * */
