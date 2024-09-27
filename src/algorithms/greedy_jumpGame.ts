/**
 * @description https://leetcode.com/problems/jump-game-ii/description/
 * */
export function jumpGame(arr: number[]) {}

/*
 * Go to the last element of an array, with minimum number of jumps.
 * array, length = n, index = i, start at 0 (normal stuff) 
 * each item of the array, is a maximum number of jump you can make 
  [2,3,1,1,4]
   0th item is 2 (you can make 2 jumps)
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

 * */
