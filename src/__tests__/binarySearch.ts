import {
  binarySearchWithBt,
  binarySearchWithLoop,
} from "@algorithms/bs_binarySearch";

const tests = [
  {
    arr: [1, 2, 3, 4, 5, 6, 9],
    n: 3,
    expected: true,
  },
  {
    arr: [1, 2, 4, 5, 6, 9],
    n: 3,
    expected: false,
  },
];

describe("Binary Search with Backtracking", () => {
  for (const item of tests) {
    test(`BS with BT for ${item.n}`, () => {
      expect(binarySearchWithBt(item.arr, item.n)).toBe(item.expected);
    });
  }
});

describe("Binary Search with Loop", () => {
  for (const item of tests) {
    test(`BS with BT for ${item.n}`, () => {
      expect(binarySearchWithLoop(item.arr, item.n)).toBe(item.expected);
    });
  }
});
