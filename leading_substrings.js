function substrings_at_start(string) {
  // for every index of the string, get a new string starting
  // from index 0 to that index, push the substring into an array
  // sort the array
  var result = [];
  for (var i = 0; i < string.length; i++) {
    result.push(string.slice(0, i + 1));
  }
  return result.sort(function(str1 , str2) {
    return str1.length - str2.length;
  });
}
