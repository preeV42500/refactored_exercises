function twice(number) {
  // check if the number is a 'double number'
  // if so then return it as is, else return 2 * number
  return double_number(number) ? number : 2 * number;
}

function double_number(number) {
  // convert number to a string
  // check if the digits in the first half of the number equal the
  // digits in the second half of the number
  var num_str = number.toString();
  var mid = Math.floor(num_str.length / 2);
  return num_str.slice(0, mid) === num_str.slice(mid);
}
