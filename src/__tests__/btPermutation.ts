import { allPossiblePermutation } from "@algorithms/btPermutation";
describe("allPossiblePermutation", () => {
  const tests = [
    {
      input: [],
      expected: [[]],
    },
    {
      input: [1],
      expected: [[1]],
    },
    {
      input: [1, 2],
      expected: [
        [1, 2],
        [2, 1],
      ],
    },
    {
      input: [1, 2, 3],
      expected: [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ],
    },
    {
      input: [4, 5, 6],
      expected: [
        [4, 5, 6],
        [4, 6, 5],
        [5, 4, 6],
        [5, 6, 4],
        [6, 4, 5],
        [6, 5, 4],
      ],
    },
  ];

  for (const { input, expected } of tests) {
    test(`returns all permutations for input ${JSON.stringify(input)}`, () => {
      const result = allPossiblePermutation(input);

      // Sort each sub-array to ensure order doesn't affect comparison
      const sortedResult = result.map((arr) =>
        arr.slice().sort((a, b) => a - b),
      );
      const sortedExpected = expected.map((arr) =>
        arr.slice().sort((a, b) => a - b),
      );

      // Sort the outer array to ensure permutations order doesn't affect comparison
      sortedResult.sort();
      sortedExpected.sort();

      expect(sortedResult).toEqual(sortedExpected);
    });
  }
});
