import { largestSumAfterKnegations } from "@algorithms/greedy_maxSumOfArrayKNegations";

const testCases = [
  {
    input: [4, 2, 3],
    k: 1,
    ans: 5,
  },
  {
    input: [3, -1, 0, 2],
    k: 3,
    ans: 6,
  },
  {
    input: [2, -3, -1, 5, -4],
    k: 2,
    ans: 13,
  },
];

testCases.forEach(({ input, k, ans }, index) => {
  test(`Largest sum  after K negation ${index + 1}`, () => {
    expect(largestSumAfterKnegations(input, k)).toEqual(ans);
  });
});
