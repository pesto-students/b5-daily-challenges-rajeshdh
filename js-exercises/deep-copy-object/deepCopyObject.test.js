import {
  deepCopyObject,
} from './deepCopyObject';

describe('deepCopyObject', () => {
  it('returns a deep copy of given object', () => {
    const myObj = {
      subObj: {
        key: 'value',
      },
    };

    const yourObj = deepCopyObject(myObj, true);

    yourObj.subObj.key = 'new value';

    expect(yourObj.subObj.key).toEqual('new value');
    expect(myObj.subObj.key).toEqual('value');
  });

  it('returns a deep copy of given object with getter and setters', () => {
    const myObj = {
      subObj: {
        get name() {
          return this._name;
        },

        set name(value) {
          this._name = value;
        },
      },
    };

    const yourObj = deepCopyObject(myObj, true);
    myObj.subObj.name = 'value';
    yourObj.subObj.name = 'new value';

    expect(yourObj.subObj.name).toEqual('new value');
    expect(myObj.subObj.name).toEqual('value');
  });

  it('returns copy of other data types', () => {
    expect(deepCopyObject(4)).toEqual(4);
    expect(deepCopyObject('string!')).toEqual('string!');
    expect(deepCopyObject(true)).toBe(true);
    expect(deepCopyObject(null)).toBeNull();
  });
});
