function star(n) {
 // get array with n subarrays
 var patternArray = getArray(n);
 var mid = Math.floor(n / 2);

 // vertical line
 for (var i = 0, len = patternArray.length; i < len; i++) {
   patternArray[i][mid] = "*";
 }

 // horizontal line
 for (var i = 0; i < n; i++) {
   patternArray[mid][i] = "*";
 }

 // left diagonal
 for (var i = 0, j = 0; i < patternArray.length, j < n; i++) {
  patternArray[i][j] = "*";
  j++;
 }

 // right diagonal
 for (var i = patternArray.length - 1, j = 0; i >= 0, j < n; i--) {
  patternArray[i][j] = "*";
  j++;
 }
 var pattern = patternArray.map(function(subarray, index) { // join subarrays
  if (index === mid) {
    return ' ' + subarray.join('');
  }
  return subarray.join(' ');
 }).join("\n");
 console.log(pattern);
}

function getArray(n) {
  var result = [];
  for (var i = 0; i < n; i++) {
    result.push([]);
  }
  return result;
}
