import {
  findPairWithAbsoluteDifference,
  findPairWithAbsoluteDifferenceOptimized,
} from "@algorithms/bruteForce";

// Array of test cases with input and expected output
const testCases = [
  { arr: [1, 5, 3, 4, 2], target: 2, expected: 3 },
  { arr: [1, 2, 3, 4], target: 1, expected: 3 },
  { arr: [10, 20, 30], target: 10, expected: 2 },
  { arr: [1, 1, 1, 1], target: 0, expected: 6 }, // Counting pairs with no difference
  { arr: [], target: 2, expected: 0 }, // Empty array case
  { arr: [3], target: 1, expected: 0 }, // Single element array
  { arr: [1, 6, 2, 7], target: 5, expected: 2 }, // Pairs with larger target
  { arr: [1, -1, 2, 0], target: 1, expected: 3 }, // Including negative numbers
];

// Looping over the test cases for the optimized function
describe("Pairs with Absolute difference", () => {
  for (const { arr, target, expected } of testCases) {
    test(`should return ${expected} pairs with target ${target} for array [${arr}]`, () => {
      expect(findPairWithAbsoluteDifferenceOptimized(arr, target)).toBe(
        expected,
      );
      expect(findPairWithAbsoluteDifference(arr, target)).toBe(expected);
    });
  }
});
