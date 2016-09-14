function interleave(array1, array2) {
  // push an element from array1 into result array,
  // and the element at the same index in array2 (both are same length)
  var result = [];
  array1.forEach(function(item, index) {
    result.push(item, array2[index]);
  });
  return result;
}
