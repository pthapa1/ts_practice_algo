import { getRandomizePositions } from "./algorithms/shiftingArray.js";
import { person } from "./test.js";

function greeting(userName: string): string {
  console.log("Greeting ", userName);
  return "Hello" + " " + userName;
}
greeting(person.name);

const currentApplications: string[] = ["55", "56", "57", "58"];

// Assuming getRandomizePositions is a function that returns an array of randomized positions
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
  const applicationId = currentApplications[i];
  const initialPosition = i + 1;
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

for (let i = 0; i < reversedFinalPositions.length - 1; i++) {
  const position = reversedFinalPositions[i];
  const applicationId = mapFinalPositionForElements[position]; // using this applicaiton id A
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
      // loop inside the object and decrement initial position by 1
    }
  }
}
// for (let i = 0 + 1; i < 4; i++) {
//   console.log("hello number", i);
// }

/*
 * 
 * {
  '55': { initial_position: 1, final_position: 4 },
  '56': { initial_position: 2, final_position: 1 },
  '57': { initial_position: 3, final_position: 2 },
  '58': { initial_position: 4, final_position: 3 }
}
if the initial_position of the mapComparator is different from the final_position, then you sort it 
if app's mapComparator.applicationId.initial_position != mapComparator.applicationId.final_position , then you change {
   const tempStorage = 55's initial position 
   change the initial_position of 55 to it's final position. 
   excluding the 1, change the 2, 3 and 4's initial_position value
   delete mapComparator.applicationId <- 55 in this case. 
} 
 * */
