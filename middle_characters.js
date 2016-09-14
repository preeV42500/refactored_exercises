function center_of(string) {
  // if even length, get characters at index before mid index and mid index
  // else get character at mid index
  var mid = Math.floor(string.length / 2);
  if (string.length % 2 === 0) {
    return string.slice(mid - 1, mid + 1);
  } else {
    return string.slice(mid, mid + 1);
  }
}
