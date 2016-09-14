function merge(array1, array2) {
  // iterate through array 1
  // if array2[j] is less than or equal array1[i]
  // push it into result array, increment j
  // else push array1[i] into result array, increment i
  // concatenate any remaining elements in array2 to result

  var result = [];
  var i = 0;
  var j = 0;
  while (i < array1.length) {
    if (array2[j] <= array1[i]) {
      result.push(array2[j]);
      j++;
    } else {
      result.push(array1[i]);
      i++;
    }
  }
  if (array2[j]) {
    return result.concat(array2.slice(j));
  }
  return result;
}
