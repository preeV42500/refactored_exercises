function sum_of_sums(array) {
  return array.reduce(function(total, val, index) {
    // reduce the subarray from 0 through index, and add it to the total 
    return total + array.slice(0, index + 1).reduce(function(sum, val) {
      return sum + val;
    });
  }, 0);
}
