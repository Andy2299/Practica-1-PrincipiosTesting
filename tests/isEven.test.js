const isEven = require('../isEven');

test('verifica que 2 es par', () => {
  expect(isEven(2)).toBe(true);
});

test('verifica que 3 no es par', () => {
  expect(isEven(3)).toBe(false);
});
