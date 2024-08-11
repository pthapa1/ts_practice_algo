// my solution, but it exceeded the allotted time limit on leetcode
export function comboSumII(candidates: number[], target: number): number[][] {
  const output: number[][] = [];
  candidates.sort((a, b) => a - b);
  const seen = new Set<string>();
  function backtrack(
    start: number,
    target: number,
    combination: number[] = [],
  ) {
    const seenItem = combination.join(",");
    if (target === 0 && !seen.has(seenItem)) {
      output.push([...combination]);
      seen.add(seenItem);
    }
    if (target < 0) return;
    for (let i = start; i < candidates.length; i++) {
      combination.push(candidates[i]);
      backtrack(i + 1, target - candidates[i], combination);
      combination.pop();
    }
  }
  backtrack(0, target, []);
  console.log(output);
  return output;
}
// comboSumII([2, 5, 2, 1, 2], 5);
// comboSumII(
//   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//   27,
// );
// my hunch was right.
// The idea is to sort the items first
// Then, after the second run i > start, if candidate[i] === candidates[i - 1], then continue
// Also, lastly, if candidate[i] > target break
function combinationSum2(candidates: number[], target: number): number[][] {
  const output: number[][] = [];
  candidates.sort((a, b) => a - b); // Sorting helps to avoid unnecessary recursion

  function backtrack(
    start: number,
    target: number,
    combination: number[],
  ): void {
    if (target === 0) {
      output.push([...combination]);
      return;
    }
    if (target < 0) return;

    for (let i = start; i < candidates.length; i++) {
      // Skip duplicates
      const current = candidates[i];
      if (i > start && current === candidates[i - 1]) continue;
      if (current > target) break; // No need to proceed if the current number exceeds the target

      combination.push(current); // Choose the current candidate
      backtrack(i + 1, target - current, combination); // Explore further with the reduced target
      combination.pop(); // Backtrack and remove the last candidate
    }
  }

  backtrack(0, target, []);
  return output;
}

// Example usage:
const candidates = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
]; //[10, 1, 2, 7, 6, 1, 5];
const target = 27;
console.log(combinationSum2(candidates, target));
