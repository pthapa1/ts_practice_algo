/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.
Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
Example 3:

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 

Notes:
Rotating means shifting right. 
They are rotated but they are still sorted.
Once the rotation starts, smallest is not the leftMost Oth index item. 
 * */
export function bs_rotatedArrayRecursion(
  arr: number[],
  pL = 0,
  pR = arr.length - 1,
): number {
  const middleIndex = Math.floor((pL + pR) / 2);
  const middleNumber = arr[middleIndex];

  if (pL === pR) return arr[pL];

  // we can't decide since they are all same or right and left are the same
  if (
    (arr[pL] === middleNumber && middleNumber === arr[pR]) ||
    (arr[pL] === arr[pR] && middleNumber !== arr[pR])
  ) {
    return Math.min(
      bs_rotatedArrayRecursion(arr, pL, middleIndex),
      bs_rotatedArrayRecursion(arr, middleIndex + 1, pR),
    );
  }

  // non rotated array or rotated nth time for an array with length of n
  if (arr[pL] < arr[pR]) return arr[pL];
  // if the smallest item is in the right half
  if (arr[pR] < middleNumber) {
    return bs_rotatedArrayRecursion(arr, middleIndex + 1, pR);
  }
  // if the smallest is in the left half
  return bs_rotatedArrayRecursion(arr, pL, middleNumber);
}

export function bs_rotatedArrayWhile(arr: number[]) {
  let pL = 0;
  let pR = arr.length - 1;
  while (pL < pR) {
    const middleIndex = Math.floor((pL + pR) / 2);
    // handle duplicates
    if (arr[pL] === arr[pR] && arr[middleIndex] === arr[pR]) {
      pL += 1;
      pR -= 1;
    }
    if (arr[pR] < arr[middleIndex]) {
      pL = middleIndex + 1;
    } else {
      pR = middleIndex;
    }
  }
  return arr[pL];
}
