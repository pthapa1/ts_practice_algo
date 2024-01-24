import { getRandomizePositions } from "./algorithms/shiftingArray.js";

const currentApplications: string[] = ["55", "56", "57", "58"];

const randomPositions: number[] = getRandomizePositions(
  currentApplications.length,
).map((x) => x + 1);

const mapInitialPositionForElements: Record<string, string> = {};
const mapFinalPositionForElements: Record<string, string> = {};
const mapComparator: Record<
  string,
  { initial_position: number; final_position: number }
> = {};

for (let i = 0; i < currentApplications.length; i++) {
  // get the application id here
  const applicationId = currentApplications[i];
  // initial position is ascending, index + 1
  const initialPosition = i + 1;
  // final position is whatever random position was provided for i
  const finalPosition = randomPositions[i];

  mapInitialPositionForElements[initialPosition.toString()] = applicationId;
  mapFinalPositionForElements[finalPosition.toString()] = applicationId;
  // Create an entry in mapComparator for each applicationId
  mapComparator[applicationId] = {
    initial_position: initialPosition,
    final_position: finalPosition,
  };
}

console.log("Initial vs Final", mapComparator);
const reversedFinalPositions = Object.keys(
  mapFinalPositionForElements,
).reverse();

// loop on the map comparator inside the if statement.
// if the initial position of other apps, (not equal to the applicationId)
// and their initial_position is greater than position
// decrease their initial_position by 1 --

for (let i = 0; i < reversedFinalPositions.length - 1; i++) {
  const position = reversedFinalPositions[i];
  // using this applicaiton id
  const applicationId = mapFinalPositionForElements[position];
  if (
    mapComparator[applicationId].initial_position !==
    mapComparator[applicationId].final_position
  ) {
    mapComparator[applicationId].initial_position = parseInt(position); // change the initial position pick final position
    // what's the initial position of the app?
    const initialPositonOfApplication =
      mapComparator[applicationId].initial_position;

    for (
      let i = initialPositonOfApplication;
      i < reversedFinalPositions.length;
      i++
    ) {
      delete mapComparator.applicationId;
      // loop inside the object and decrement initial position by 1
    }
  }
}
