import { isString } from 'util';

function abbreviateString(str) {
  if (!isString(str) || !str.length) throw new Error(' Please use a valid string.');

  const strArray = str.trim().split(' ');
  const suffix = `${strArray[strArray.length - 1].charAt(0).toUpperCase()}`;
  return strArray.length > 1 ? `${strArray[0]} ${suffix}.` : `${strArray[0]}`;
}

export { abbreviateString };
