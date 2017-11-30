// Cmd-X/Cmd-V as a function
//
// Implement the function cutPaste(sourceFilename, targetFilename)
const fs = require("fs");

function cutPaste(source, target) {
  if(copyPaste(source, target)) {
    return deleteFile(source);
  }
  return false;
}

function deleteFile(path) {
  if(isAFile(path)) {
    fs.unlinkSync(path);
    return true;
  }
  return false;
}

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

module.exports = cutPaste;
