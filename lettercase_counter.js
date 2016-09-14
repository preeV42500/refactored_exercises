function letter_case_count(string) {
  // initial object has lowercase, uppercase, and neither properties set to 0
  // if character is lowercase, increment count of lowercase
  // else if character is uppercase, increment count of uppercase
  // else increment count of neither

  return string.split('').reduce(function(obj, char) {
    if (char.match(/[a-z]/)) {
      obj.lowercase++;
    } else if (char.match(/[A-Z]/)) {
      obj.uppercase++;
    } else {
      obj.neither++;
    }
    return obj;
  }, { lowercase: 0, uppercase: 0, neither: 0 });
}
