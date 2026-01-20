export function convertTo2DArray<T>(array: T[]) {
  var res: T[][] = [];
  let row: T[] = [];
  array.forEach((item, idx) => {
    row.push(item);
    if (idx % 2 != 0) {
      res.push(row);
      row = [];
    }
  });

  return res;
}
