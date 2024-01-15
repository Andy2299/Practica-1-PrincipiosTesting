const addNumbers = require('../addNumbers');


test('la suma de 2 y 3 es mayor que 4 y menor o igual a 5', () => {
  const result = addNumbers(2, 3);
  expect(result).toBeGreaterThan(4);
  expect(result).toBeLessThanOrEqual(5);
});