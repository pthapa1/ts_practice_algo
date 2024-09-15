import { assignCookies, canPlaceFlowers } from "@algorithms/greedy";

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

const cookiesTestCases = [
  {
    g: [1, 2, 3],
    s: [1, 1],
    expected: 1,
  },
  {
    g: [1, 2],
    s: [1, 2, 3],
    expected: 2,
  },
];

cookiesTestCases.forEach(({ g, s, expected }, index) => {
  test(`Assign Cookies to Happy Children. Problem ${index}`, () => {
    expect(assignCookies(g, s)).toEqual(expected);
  });
});
