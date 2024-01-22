/*
 * @description: Given a length `n`, get unique and randomized positions from 0 to n
 * @example: for number 2, it returns get [1, 2, 0] or [2, 0, 1].
 * Item Positions are not the same, and items are never repeated
 * */
export function getRandomizePositions(n: number): number[] {
  const finalPosition: number[] = [];
  for (let i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * n);
    if (finalPosition.includes(randomNumber) || randomNumber === i) {
      i--;
      continue;
    }
    finalPosition.push(randomNumber);
  }
  return finalPosition;
}
