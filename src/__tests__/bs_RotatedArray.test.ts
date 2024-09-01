import {
  bs_rotatedArrayRecursion,
  bs_rotatedArrayWhile,
} from "@algorithms/bs_RotatedArray";

describe("bs_rotatedArray", () => {
  const testCases = [
    { input: [4, 5, 6, 7, 0, 1, 2], expected: 0 },
    { input: [6, 7, 1, 2, 3, 4, 5], expected: 1 },
    { input: [10], expected: 10 },
    { input: [1, 2, 3, 4, 5, 6, 7], expected: 1 },
    { input: [2, 1], expected: 1 },
    { input: [1, 2], expected: 1 },
    { input: [1, 1, 1, 1, 1, 1, 1], expected: 1 },
    { input: [2, 2, 2, 0, 1, 2, 2], expected: 0 },
    { input: [10, 11, 12, 13, 14, 5, 6, 7, 8, 9], expected: 5 },
    { input: [1, 2, 3, 4, 5, 6, 7], expected: 1 }, // No rotation
    { input: [2, 3, 4, 5, 6, 7, 1], expected: 1 }, // Pivot is the last element
    {
      input: Array.from({ length: 1000000 }, (_, i) => i + 2).concat([1]),
      expected: 1,
    },
    { input: [30, 40, 50, 10, 20], expected: 10 },
    { input: [2, 2, 2, 2, 2, 2, 2], expected: 2 },
  ];

  testCases.forEach(({ input, expected }, index) => {
    test(` Recursion:  Test case ${index + 1}: should find the minimum in the array ${JSON.stringify(input)}`, () => {
      expect(bs_rotatedArrayRecursion(input)).toBe(expected);
    });
    test(` While Loop: Test case ${index + 1}: should find the minimum in the array ${JSON.stringify(input)}`, () => {
      expect(bs_rotatedArrayWhile(input)).toBe(expected);
    });
  });
});
