// arrays are always sorted in binary search.
// In case, it's not sort them outside
export function binarySearchWithBt(
  arr: number[],
  n: number,
  pL = 0,
  pR = arr.length - 1,
) {
  // if the pointers cross, then element is not present
  if (pL > pR) return false;
  const midIndex = Math.floor((pL + pR) / 2);
  const midItem = arr[midIndex];
  if (midItem === n) return true;
  if (n < midItem) {
    return binarySearchWithBt(arr, n, pL, midIndex - 1);
  }
  return binarySearchWithBt(arr, n, midIndex + 1, pR);
}

export function binarySearchWithLoop(arr: number[], n: number) {
  let pL = 0;
  let pR = arr.length - 1;
  while (pL <= pR) {
    const midIndex = Math.floor((pR + pL) / 2);
    const midItem = arr[midIndex];
    if (n === midItem) return true;
    if (n < midItem) {
      pR = midIndex - 1;
    }
    if (n > midIndex) {
      pL = midIndex + 1;
    }
  }
  return false;
}
