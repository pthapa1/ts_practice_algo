/**
 * @description https://leetcode.com/problems/jump-game-ii/description/
 * */
export function jumpGame(nums: number[]): number {
  let totalJump = 0;
  let jumpTimes = 0;
  let jumpStartPosition = nums[0];
  const lastIndex = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    let currItem = nums[i];
    // jumpTimes = currItem;
    let need = lastIndex - i;
    if (!need) return totalJump; // if need is 0, we are at the final position
    if (!jumpTimes) {
      if (currItem >= need) {
        return totalJump++;
      }
      for (let j = 0; j < jumpTimes; j++) {
        const newIndex = i + currItem;
        currItem = nums[newIndex];
        need = lastIndex - newIndex;
        if (newIndex === need) return totalJump++;
        totalJump++;
        jumpStartPosition = nums[i + currItem];
        jumpTimes--;
      }
    }
  }

  return totalJump;
}

export function jumpGameChat(nums: number[]): number {
  let totalJump = 0;
  const lastIndex = nums.length - 1;
  for (let i = 0; i < nums.length; i++) {
    const currItem = nums[i];
    let need = lastIndex - i; // This calculates how far we are from the last index.
    if (!need) return totalJump; // if need is 0, we are at the final position
    if (currItem >= need) {
      return totalJump + 1; // Increment totalJump before returning.
    }
    const newIndex = i + currItem; // Calculate the new index we can jump to.
    need = lastIndex - newIndex; // Update need based on the new index.
    totalJump++; // Increment totalJump as we are making a jump.
  }
  return totalJump; // Return the total number of jumps made.
}

/*
 * Go to the last element of an array, with minimum number of jumps.
 * array, length = n, index = i, start at 0 (normal stuff) 
 * each item of the array, is a maximum number of jump you can make 
[2,3,1,1,4]
 0th item is 2 (you can make max of 2 jumps)
 your j can be either 0, 1, or 2
you need nums[4] - index of 4 to go to the last index. 
I am at index 0. 
4-0 = need 4
need / max jump = 4 / 2 = 2 ()
Do we have j 2. yes use that. 

if (nums.length) / firstItem && the firstItem >= the (nums.length / firstItem) => 4 / 2 = 2
if (nums.length) / firstItem && the firstItem < the (nums.length / firstItem) => 

[1, 1, 1, 1, 1, 1, 1]
- length = 7 i.e 6th index
- I am at 1 (make 1 jump. j can be max of 1)
- add i + j (is this 7? No) -> it is 2
- is the jump left? No. 

Then find out what is the number at 2?
- what is at 2? 1
- is i >= 7? 
 - if it is 7 or greater, use what we need. Right now we need, we need 6 - 2 = 4
 - if i < 7, use i 
 - how many jumps  (what is the number at i) = 1
 nums[i+j] = nums[2+1] = nums[3]




- i+j = 2  
- (7 - 2) = 3
- jump is over

- What is the item at 2 (i+j)

 
Say, we don't have j as 2, and j < 2, say 1, 
- use j = 1 => 0 + 1 = 1 => nums[1] = 3
- I still need 4 - 1 = 3
- Can j be 3? Yes! 

 from 0, you can jump num[0+j]
 where j > 0, but less than 2
 I need i of 4 && I can do 2 jumps && num[0+2] & num[0+2] 
Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [2, 3, 0, 1, 4] -> at 0, 2 ~ (require i = 4) -> how do you make a number (4), by adding another number to it least times
-> 0 && I can add 0, 1, or 2, (2 times) -> 4/2 -> is a whole number. So, the answer is correct = 2
Output: 2 

Input: nums = [2, 3, 0, 1, 4, 5]
-> 5 / 2 = 2.5  ~ 3 (round up)
-> [0+2] = 2 , item 0 with index of 2
-> [2+2] = 4, item at index 4, is 4
-> [4+1] = 3

Inout: nums: = [2, 3, 0, 1, 4, 5, 6]
-> 7/2 = 3.5 ~ 4
- do you reach the destination by the number of initial jumps. 
- if you don't how far are you and 
- what's the j number there

Input: nums = [2, 3, 1, 1, 4]
Output: 2
 * */
