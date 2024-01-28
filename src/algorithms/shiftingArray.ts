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

/**
 * This script rearranges a list of applications into a new order based on randomly generated positions.
 * A clone of the original array, 'tempApplications', tracks the reordering process.
 * Each application is moved to its new position within this temporary array using the 'moveToFinalPosition' function.
 * This method ensures that each application ends up in a unique and different position from its start */

const currentApplications: string[] = ["55", "56", "57", "58"];

const randomPositions: number[] = getRandomizePositions(
  currentApplications.length,
).map((x) => x + 1);

// create a clone of the currentApplications array
const tempApplications: string[] = [...currentApplications];
const finalPositionsMap: Record<string, number> = {};
randomPositions.forEach((position, index) => {
  finalPositionsMap[currentApplications[index]] = position;
});
console.log("Final position map", finalPositionsMap);

function moveToFinalPosition(
  applicationId: string,
  finalPosition: number,
): void {
  const currentIndex = tempApplications.indexOf(applicationId);
  tempApplications.splice(currentIndex, 1);
  tempApplications.splice(finalPosition - 1, 0, applicationId);
}
currentApplications.forEach((applicationId) => {
  const finalPosition = finalPositionsMap[applicationId];
  if (tempApplications[finalPosition - 1] !== applicationId) {
    moveToFinalPosition(applicationId, finalPosition);
    console.log(tempApplications);
  }
});

console.log("Initial array: ", currentApplications);
console.log("Final array:", tempApplications);
