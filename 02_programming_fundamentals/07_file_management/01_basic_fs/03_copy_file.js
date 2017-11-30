// Add a function `copyPaste` which takes a `path` as input and
//remove the file
// if it's a file (do not remove a folder). We don't want
//to override a file if
// it already exists.
//
// The function returns a boolean indicating if it successfully
//removed the file.
const fs = require("fs");

function copyPaste(source, target) {
  if(isAFile(source)) {
    fs.copyFileSync(source, target, fs.constants.COPYFILE_EXCL);
    return true;
  }
  return false;
}

function isAFile(path) {
  const stats = fs.lstatSync(path);
  return stats.isFile();
}

module.exports = copyPaste;
