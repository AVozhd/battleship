const transposeArray = matrix =>
  matrix.reduce(($, row) => row.map((_, i) => [...($[i] || []), row[i]]), []);

export default transposeArray;
