function toWords(sentence) {
  const allWords = sentence.split(/[.?!, :;]+/);
  return allWords.filter(word => word !== "");
}
// on ajoute un ; dans nos séparateurs
module.exports = toWords;
