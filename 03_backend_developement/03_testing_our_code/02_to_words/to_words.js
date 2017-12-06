function toWords(sentence) {
  const allWords = sentence.split(/[.?!, :]+/);
  //str.split([séparateur])
  return allWords.filter(word => word !== "");
}

module.exports = toWords;
