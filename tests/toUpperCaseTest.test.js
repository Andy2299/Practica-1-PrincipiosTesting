const importedToUpperCaseTest = require('../toUpperCaseTest');

test('convierte "test" a mayúsculas', () => {
  const result = importedToUpperCaseTest('test');
  expect(result).toBe('TEST');
  expect(result).toMatch(/[A-Z]/);
});
