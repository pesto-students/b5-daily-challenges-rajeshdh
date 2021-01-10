function checkTypeOf(args) {
  const type = typeof args;
  if (args === null || !(type === 'object' || type === 'function')) {
    return false;
  }
  return true;
}

const deepCopyObject = (objToCopy, copyDescriptors = false) => {
  if (!checkTypeOf(objToCopy)) return objToCopy;
  const result = {};

  const keys = [
    ...Object.getOwnPropertyNames(objToCopy),
    ...Object.getOwnPropertySymbols(objToCopy),
  ];
  keys.forEach(key => {
    if (Object.prototype.hasOwnProperty.call(objToCopy, key)) {
      if (copyDescriptors) {
        const descriptor = Object.getOwnPropertyDescriptor(objToCopy, key);
        if (descriptor.get || descriptor.set) {
          Object.defineProperty(result, key, {
            configurable: descriptor.configurable,
            enumerable: descriptor.enumerable,
            get: deepCopyObject(descriptor.get),
            set: deepCopyObject(descriptor.set),
          });
        } else {
          Object.defineProperty(result, key, {
            configurable: descriptor.configurable,
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            value: deepCopyObject(descriptor.value),
          });
        }
      } else {
        result[key] = deepCopyObject(objToCopy[key]);
      }
    }
  });

  Object.setPrototypeOf(result, Object.getPrototypeOf(objToCopy));

  return result;
};

export { deepCopyObject };
