function multiply_list(array1, array2) {
  // multiply each value in one array with corresponding value in other array

  return array1.reduce(function(result, item, index) {
    result.push(item * array2[index]);
    return result;
  }, []);
}
