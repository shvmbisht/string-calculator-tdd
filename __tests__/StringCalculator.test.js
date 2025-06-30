const StringCalculator = require('../StringCalculator');

describe('StringCalculator', () => {
  test('returns 0 for an empty string', () => {
    expect(StringCalculator.add('')).toBe(0);
  });

  test('returns the number for a single number', () => {
    expect(StringCalculator.add('1')).toBe(1);
  });

  test('returns the sum for two numbers', () => {
    expect(StringCalculator.add('1,2')).toBe(3);
  });

  test('returns the sum for an unknown amount of numbers', () => {
    expect(StringCalculator.add('1,2,3,4')).toBe(10);
  });

  test('returns the sum when new lines are used as delimiters', () => {
    expect(StringCalculator.add('1\n2,3')).toBe(6);
  });

  test('supports custom delimiters', () => {
    expect(StringCalculator.add('//;\n1;2')).toBe(3);
  });

  test('throws an exception for a single negative number', () => {
    expect(() => StringCalculator.add('1,-2,3')).toThrow(
      'negative numbers not allowed -2',
    );
  });

  test('throws an exception listing all negative numbers', () => {
    expect(() => StringCalculator.add('1,-2,-5,3')).toThrow(
      'negative numbers not allowed -2,-5',
    );
  });
}); 