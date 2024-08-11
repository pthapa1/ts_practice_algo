export function subsets(num: number[]): number[][] {
  const output: number[][] = [[]];
  function backtrack(start: number, tempArr: number[] = []) {
    if (start > num.length) return;
    for (let i = start; i < num.length; i++) {
      const candidate = num[i]; // 1
      tempArr.push(candidate); // [1]
      output.push([...tempArr]); // [[], [1]]
      backtrack(i + 1, tempArr); // [1] -> [1, 2] -> [1, 2] -> [[], [1], [1, 2]] -> [[], [1], [1, 2], [1, 2, 3]]
      tempArr.pop(); // cleanup for the next iteration
    }
  }
  backtrack(0);
  return output;
}

subsets([1, 2, 3]);
