export function canPlaceFlowers(arr: number[], n: number): boolean {
  let count = 0;
  // check if adjacent positions are 1. Make sure you account for edge cases
  for (let i = 0; i < arr.length; i++) {
    // adjacent item needs to be zero.
    // if i - 1 is undefined, then it must be the first item. So, point to it
    const leftAdjacentPositonisEmpty = arr[i - 1] === 0 || i === 0;
    // if i + 1 is undefined, then it must be the last item. So, point to it
    const rightAdjacentPosition = arr[i + 1] === 0 || i === arr.length - 1;
    if (arr[i] === 0 && rightAdjacentPosition && leftAdjacentPositonisEmpty) {
      // plant the flower, or occupy the space
      arr[i] = 1;
      count++;
    }
  }
  // at leat n should be present
  return count >= n;
}
export function canPlaceFlowersCopied(flowerbed: number[], n: number): boolean {
  if (n === 0) {
    return true;
  }

  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    const current = flowerbed[i];
    const prev = flowerbed[i - 1];
    const next = flowerbed[i + 1];
    // !0 = not falsy ~ truthy -> this is empty
    if (!current && !prev && !next) {
      count++;
      flowerbed[i] = 1;
    }
  }

  return count >= n;
}
