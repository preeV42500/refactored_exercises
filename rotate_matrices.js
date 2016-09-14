function rotate90(matrix) {
  // similar to transpose, except transposed subarrays are reversed
  return matrix[0].map(function(col, index) {
    return matrix.map(function(row) {
      return row[index];
    }).reverse();
  });
}
