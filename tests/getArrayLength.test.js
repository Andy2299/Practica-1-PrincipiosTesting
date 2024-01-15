const getArrayLength = require('../getArrayLength');

test('longitud del array es 3', () => {
  expect(getArrayLength([1, 2, 3])).toBe(3);
});
