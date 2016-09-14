// create an array holding values for # of diamonds in each row
// map those numbers to a string of stars and spaces
// join the resulting array with a new line

function diamond(n) {
  var diamondsPerRow = numberDiamondsPerRow(n);
  var diamondPattern = diamondsPerRow.map(function(num) {
    var spaces = spacesString((n - num) / 2);
    var stars = starsString(num);
    return spaces + stars + spaces;
  }).join("\n");
  console.log(diamondPattern);
}

// creates an array with values representing number of diamonds in each row
function numberDiamondsPerRow(n) {
  var result = [];
  for (var i = 1; i < n; i += 2) {
    result.push(i);
  }
  for (var i = n; i >= 1; i -= 2) {
    result.push(i);
  }
  return result;
}

// function to create a string of x stars
function starsString(x) {
  var string = '';
  for (var i = 0; i < x; i++) {
    string += '*';
  }
  return string;
}

// function to create a string of spaces
function spacesString(n) {
  var string = '';
  for (var i = 0; i < n; i++) {
    string += ' ';
  }
  return string;
}
