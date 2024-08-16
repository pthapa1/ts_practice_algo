function uniqueArr(arr: string[][]) {
  const result: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const item = arr[i][j];
      if (item !== ".") {
        result.push(item);
      }
    }
  }
  const setlength = new Set(result);
  return setlength.size === result.length;
}

export function validate9by9hasUnique3by3block(arr: string[][]) {
  // verify each row and each col is unique
  for (let i = 0; i < arr.length; i++) {
    const seenInRow = new Set<string>();
    const seenInCol = new Set<string>();
    for (let j = 0; j < arr.length; j++) {
      const valRow = arr[i][j];
      const valCol = arr[j][i];
      if (valRow !== "." && seenInRow.has(valRow)) return false;
      if (valCol !== "." && seenInCol.has(valCol)) return false;
      seenInRow.add(valRow);
      seenInCol.add(valCol);
    }
  }

  // verify 3x3 subgrid is unique
  for (let boxCol = 0; boxCol < 3; boxCol++) {
    for (let boxRow = 0; boxRow < 3; boxRow++) {
      const subgrid: string[][] = [];

      for (let i = 0; i < 3; i++) {
        const row: string[] = [];
        for (let j = 0; j < 3; j++) {
          row.push(arr[boxRow * 3 + i][boxCol * 3 + i]);
        }
      }
      if (!uniqueArr(subgrid)) return false;
    }
  }
  return true;
}
