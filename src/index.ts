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
