function count(string, char) {
  const result = new RegExp(char, 'gi');
  return string.match(result).length;
}

function duplicateLetters(args) {
  if (!args || typeof (args) !== 'string') return false;

  const countsArr = args.split('').map((item) => count(args, item));
  const maxCount = Math.max(...countsArr);

  if (maxCount > 1) {
    return maxCount;
  }
  return false;
}

export {
  duplicateLetters,
};
