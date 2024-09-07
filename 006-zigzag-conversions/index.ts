const isOdd = (value: number): boolean => !!(value % 2);

function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  const numCols = Math.ceil((s.length * 2) / (numRows + (numRows - 2)));
  const matrix: (string | null)[][] = [];
  const convertedString: string[] = [];
  var letterIndex = 0;

  for (var column = 0; column < numCols; column++) {
    const columnArray: (string | null)[] = [];
    for (let row = 0; row < numRows; row++) {
      if (
        (row === 0 || row === numRows - 1 || letterIndex === s.length) &&
        isOdd(column)
      )
        columnArray.push(null);
      else s[letterIndex] && columnArray.push(s[letterIndex++]);
    }
    matrix[column] = isOdd(column) ? columnArray.reverse() : columnArray;
  }

  letterIndex = 0;
  while (letterIndex < s.length) {
    for (let row = 0; row < numRows; row++) {
      for (var column = 0; column < numCols; column++) {
        if (matrix[column][row])
          convertedString[letterIndex++] = matrix[column][row];
      }
    }
  }
  return convertedString.join("");
}
