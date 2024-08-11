import { subsets } from "@algorithms/btSubset";

test("test sum", () => {
  expect(subsets([1])).toEqual([[], [1]]);
});
