export function allPossiblePermutation(distinctArray: number[]) {
  const output: number[][] = [];
  function backtrack(remArr: number[], aPermuation: number[]) {
    if (remArr.length === 0) {
      output.push([...aPermuation]);
      return;
    }
    for (let i = 0; i < remArr.length; i++) {
      const candidate = remArr[i];
      aPermuation.push(candidate);
      const newArrayWithoutCandidate = remArr
        .slice(0, i)
        .concat(remArr.slice(i + 1));
      backtrack(newArrayWithoutCandidate, aPermuation);
      aPermuation.pop();
    }
  }
  backtrack(distinctArray, []);
  return output;
}
allPossiblePermutation([1, 2, 3]);
// allPossiblePermutation([1, 0]);
// allPossiblePermutation([1]);
//
//
function permute(nums: number[]): number[][] {
  const output: number[][] = [];

  function backtrack(start: number) {
    if (start === nums.length) {
      output.push([...nums]);
      return;
    }
    for (let i = start; i < nums.length; i++) {
      // Swap the current element with the start element
      [nums[start], nums[i]] = [nums[i], nums[start]];
      // Recursively call backtrack with the next start index
      backtrack(start + 1);
      // Swap back to restore the original array
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }

  backtrack(0);
  return output;
}

permute([1, 2, 3]);
permute([1, 0]);
permute([1]);
