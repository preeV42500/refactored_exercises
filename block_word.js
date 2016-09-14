function block_word(word) {
  // iterate through letters of word
  // if a letter can be mapped to another letter that is also in the word
  // or if a letter has already been seen, return false
  var blocks = {
    B: "O",
    X: "K",
    D: "Q",
    C: "P",
    N: "A",
    G: "T",
    R: "E",
    F: "S",
    J: "W",
    H: "U",
    V: "I",
    L: "Y",
    Z: "M"
  };

  for (var i = 0; i < word.length; i++) {
    var letter = word[i];
    if (mappedLetter(letter, blocks, word) || !letterAppearsOnce(letter, word)) {
      return false;
    }
  }
  return true;
}

function mappedLetter(letter, blocks, word) {
  // check if the given letter maps to another letter in blocks object
  // and if that letter is also in the word
  return word.indexOf(blocks[letter]) !== -1;
}

// function to check if a letter is used once
// first and last index of the letter in the word
// should be the same if the letter only appears once
function letterAppearsOnce(letter, word) {
  return word.indexOf(letter) === word.lastIndexOf(letter);
}
