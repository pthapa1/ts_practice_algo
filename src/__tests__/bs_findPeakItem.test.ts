import { findPeakItem } from "@algorithms/bs_findPeakItem";

describe("findPeakItem", () => {
  test("should return the index of a peak element in a small array", () => {
    const nums = [1, 2, 3, 1];
    const result = findPeakItem(nums);
    expect(result).toBe(2);
  });

  test("should return the index of a peak element in a larger array", () => {
    const nums = [1, 2, 1, 3, 5, 6, 4];
    const result = findPeakItem(nums);
    expect([1, 5]).toContain(result); // Since 2 and 6 are peaks, the function can return 1 or 5
  });

  test("should handle a single element array", () => {
    const nums = [1];
    const result = findPeakItem(nums);
    expect(result).toBe(0);
  });

  test("should handle a two-element array where the first is a peak", () => {
    const nums = [2, 1];
    const result = findPeakItem(nums);
    expect(result).toBe(0);
  });

  test("should handle a two-element array where the second is a peak", () => {
    const nums = [1, 2];
    const result = findPeakItem(nums);
    expect(result).toBe(1);
  });

  test("should return the index of the peak when the peak is at the start", () => {
    const nums = [10, 2, 1];
    const result = findPeakItem(nums);
    expect(result).toBe(0);
  });

  test("should return the index of the peak when the peak is at the end", () => {
    const nums = [1, 2, 10];
    const result = findPeakItem(nums);
    expect(result).toBe(2);
  });

  test("should handle an array with multiple peaks", () => {
    const nums = [5, 10, 5, 15, 10, 20, 10];
    const result = findPeakItem(nums);
    expect([1, 3, 5]).toContain(result); // The function can return 1, 3, or 5
  });
});
