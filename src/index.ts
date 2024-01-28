// from shiftingArray.ts file
import { getRandomizePositions } from "./algorithms/shiftingArray.js";

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
