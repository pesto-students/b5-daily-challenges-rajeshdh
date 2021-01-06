const alphabeticShift = input => {
  if (input && input.length) {
    return input
      .split('')
      .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
      .join('');
  }
  return input;
};

export { alphabeticShift };
