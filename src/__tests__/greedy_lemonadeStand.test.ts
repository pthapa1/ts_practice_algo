import { lemonadeStand } from "@algorithms/greedy_lemonadeStand";

const testCases = [
  {
    bills: [5, 10, 20],
    ans: false,
  },
  {
    bills: [5, 5, 5, 10, 20],
    ans: true,
  },
  {
    bills: [5, 5, 10, 10, 20],
    ans: false,
  },
  {
    bills: [10, 5, 5, 5],
    ans: false,
  },
  {
    bills: [5, 5, 5, 5, 20],
    ans: true,
  },
];

testCases.forEach(({ bills, ans }, index) => {
  test(`Lemonade Stand test ${index + 1}`, () => {
    expect(lemonadeStand(bills)).toEqual(ans);
  });
});
