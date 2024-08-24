import { bs_rotatedArray } from "@algorithms/bs_RotatedArray";

describe("bs_rotatedArray", () => {
  test("should find the minimum in a rotated array", () => {
    expect(bs_rotatedArray([4, 5, 6, 7, 0, 1, 2])).toBe(0);
  });

  test("should find the minimum in a rotated array with different pivot", () => {
    expect(bs_rotatedArray([6, 7, 1, 2, 3, 4, 5])).toBe(1);
  });

  test("should return the only element in a single-element array", () => {
    expect(bs_rotatedArray([10])).toBe(10);
  });

  test("should find the minimum in a non-rotated array", () => {
    expect(bs_rotatedArray([1, 2, 3, 4, 5, 6, 7])).toBe(1);
  });

  test("should find the minimum in a two-element rotated array", () => {
    expect(bs_rotatedArray([2, 1])).toBe(1);
  });

  test("should find the minimum in a two-element non-rotated array", () => {
    expect(bs_rotatedArray([1, 2])).toBe(1);
  });

  test("should find the minimum in an array with duplicates but not rotated", () => {
    expect(bs_rotatedArray([1, 1, 1, 1, 1, 1, 1])).toBe(1);
  });

  test("should find the minimum in an array with duplicates and rotated", () => {
    expect(bs_rotatedArray([2, 2, 2, 0, 1, 2, 2])).toBe(0);
  });

  test("should find the minimum in a large rotated array", () => {
    expect(bs_rotatedArray([10, 11, 12, 13, 14, 5, 6, 7, 8, 9])).toBe(5);
  });

  test("should find the minimum in an array that is rotated with the pivot at the start", () => {
    expect(bs_rotatedArray([1, 2, 3, 4, 5, 6, 7])).toBe(1); // No rotation
    expect(bs_rotatedArray([2, 3, 4, 5, 6, 7, 1])).toBe(1); // Pivot is the last element
  });

  test("should handle a large array efficiently", () => {
    const largeArray = Array.from({ length: 1000000 }, (_, i) => i + 2).concat([
      1,
    ]);
    expect(bs_rotatedArray(largeArray)).toBe(1);
  });

  test("should find the minimum in a complex rotated array", () => {
    expect(bs_rotatedArray([30, 40, 50, 10, 20])).toBe(10);
  });

  test("should find the minimum in an array where all elements are the same", () => {
    expect(bs_rotatedArray([2, 2, 2, 2, 2, 2, 2])).toBe(2);
  });
});
