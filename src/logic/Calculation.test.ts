import Calculation from './Calculation';

describe('Calculation Class', () => {
  test('Addition - should return 10.51', () => {
    const result = Calculation.calculate('4.01+6.50');
    expect(result).toEqual(10.51);
  });

  test('Subtraction - should return 149991', () => {
    const result = Calculation.calculate('150000.5-9.5');
    expect(result).toEqual(149991);
  });

  test('Multiplication - should return 3407.25', () => {
    const result = Calculation.calculate('147.5*23.1');
    expect(result).toEqual(3407.25);
  });

  test('Division - should return 2157.1', () => {
    const result = Calculation.calculate('4314.2/2');
    expect(result).toEqual(2157.1);
  });

  test('Multiple Operators - should return 12521', () => {
    const result = Calculation.calculate('150000/12-3+6*4');
    expect(result).toEqual(12521);
  });

  test('Multiple Operators - should return 2907.25', () => {
    const result = Calculation.calculate('147.5*23.1-500');
    expect(result).toEqual(2907.25);
  });

  test('Multiple Operators - should return 2158.1', () => {
    const result = Calculation.calculate('1+4314.2/2');
    expect(result).toEqual(2158.1);
  });

  test('Division by Zero - should throw an error', () => {
    expect(() => {
      Calculation.calculate('5/0');
    }).toThrowError('Division by zero');
  });

  test('Empty Expression - should return undefined', () => {
    const result = Calculation.calculate('');
    expect(result).toBeUndefined();
  });
});
