/*
[4, 2, 3] , k = 1
 find the smallest, and make multiply by -1 
 if the smallest is -1 number, it becomes positive and we don't have to multiply it again
[4, -2, 3] = 5

[3, -1, 0,  2] , k = 3
[-1, 0, 2, 3] * smallest value -1
[0, 1, 2, 3]
// sort it
[-1, 0, 2, 3] 
-1 * -1 = 1
0 * -1 = 0
- if an item is -ve (item < 0), multiply it only once and move on to the next one unitil k 
- if an item is +ve,  

// largest possible sum. That means we need to make everything positive 
// -num * -num is positive
[2, -3, -1, 5, -4]

// sort it 
[-4, -3, -1, 2, 5], k = 2
// to maximize the sum
4, 3, -1, 2, 5 = 13

[-1, 0, 2, 5, 5, 7], k = 4
1, 
 * */

function findSmallest(nums: number[]) {
  let smallestItem: number = nums[0];
  let smallestItemIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    if (currNum < smallestItem) {
      smallestItem = currNum;
      smallestItemIndex = i;
    }
  }
  return { smallestItem, smallestItemIndex };
}

export function largestSumAfterKnegations(nums: number[], k: number): number {
  // prepare the array
  for (let i = 0; i < k; i++) {
    nums.sort((a, b) => a - b);
    let { smallestItem, smallestItemIndex } = findSmallest(nums);
    smallestItem *= -1;
    nums[smallestItemIndex] = smallestItem; // Negate the smallest item
  }
  // sum the array
  return nums.reduce((sum, currVal) => sum + currVal, 0);
}
