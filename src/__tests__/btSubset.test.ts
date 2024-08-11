import { subsets } from "@algorithms/btSubset";

// Define a set of test cases with inputs and expected outputs
const testCases = [
  {
    input: [1],
    expected: [[], [1]],
  },
  {
    input: [1, 2],
    expected: [[], [1], [1, 2], [2]],
  },
  {
    input: [1, 2, 3],
    expected: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]],
  },
  {
    input: [],
    expected: [[]], // Edge case: empty input should return an array with an empty subset
  },
  {
    input: [1, 2, 2],
    expected: [[], [1], [1, 2], [1, 2, 2], [1, 2], [2], [2, 2], [2]], // Testing with duplicate elements
  },
];

// Loop over each test case
testCases.forEach(({ input, expected }, index) => {
  test(`subsets function test case ${index + 1}`, () => {
    const result = subsets(input);
    // Sort the output and expected arrays to ensure they match regardless of order
    const sortedResult = result.map((arr) => arr.sort()).sort();
    const sortedExpected = expected.map((arr) => arr.sort()).sort();
    expect(sortedResult).toEqual(sortedExpected);
  });
});
