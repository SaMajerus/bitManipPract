import isOdd from '../src/isOdd.js';

describe('isOdd', () => {

  let binRepStr1 = "0b0001";
  let binRepStr2 = "0b0010";

  test('should correctly determine Even and Odd numbers', () => {
    expect(isOdd(binRepStr1)).toEqual(true);
    expect(isOdd(binRepStr2)).toEqual(false); 
  });

});