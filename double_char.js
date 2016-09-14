function repeater(string) {
  // iterate through the string
  // add the current character to a result string 2 times
  return string.split('').reduce(function(result, char) {
    return result + char + char;
  }, '');
}
