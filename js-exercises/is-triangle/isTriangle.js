function isTriangle(a, b, c) {
  // a triangle is valid if, sum of two sides is greater than the third side
  if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
  }
  return true;
}

export {
  isTriangle,
};
