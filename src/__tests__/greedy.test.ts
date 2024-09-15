import { canPlaceFlowers } from "@algorithms/greedy";

const testCases = [
  {
    arr: [1, 0, 0, 0, 1],
    n: 1,
    expected: true,
  },
  {
    arr: [1, 0, 1, 0, 1],
    n: 1,
    expected: false,
  },
];

// Loop over each test case
testCases.forEach(({ arr, expected, n }, index) => {
  test(`Greedy: FlowerBed Problem ${index + 1}`, () => {
    expect(canPlaceFlowers(arr, n)).toEqual(expected);
  });
});
