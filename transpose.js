function transpose(matrix) {
  // for each index in a subarray
  // map each subarray to its value at that index 
  return matrix[0].map(function(col, index) {
    return matrix.map(function(row) {
      return row[index];
    });
  });
}
