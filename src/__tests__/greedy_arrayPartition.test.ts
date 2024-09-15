import { arrrayPartitioning } from "@algorithms/greedy_arrayPartition";

const testCases = [
  {
    arr: [1, 3, 4, 8, 7, 9],
    expected: 12,
  },
  {
    arr: [2, 3, 8, 9, 4],
    expected: 0,
  },
  {
    arr: [1, 4, 5, 4, 8, 0],
    expected: 5,
  },
];

testCases.forEach(({ arr, expected }, index) => {
  test(`Greedy Array Partition no ${index + 1}`, () => {
    expect(arrrayPartitioning(arr)).toEqual(expected);
  });
});