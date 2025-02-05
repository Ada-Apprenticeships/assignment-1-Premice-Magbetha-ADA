const temperatureConversion = require('./primer1.js');

// To run some tests: npm test -- -t 'temperatureC' (runs all tests within the 'temperatureConversion' describe block (uses pattern matching))
// To run one specific test, e.g. npm test -- -t 'should convert positive F' (runs the 'should convert positive Fahrenheit to Celsius' test)

describe('temperatureConversion', () => {
  describe('Fahrenheit to Celsius', () => {
    test('should convert positive Fahrenheit to Celsius', () => {
      expect(temperatureConversion(32, 'F', 'C')).toBeCloseTo(0, 2);
      expect(temperatureConversion(50, 'F', 'C')).toBeCloseTo(10, 2);
      expect(temperatureConversion(77, 'F', 'C')).toBeCloseTo(25, 2);
      expect(temperatureConversion(212, 'F', 'C')).toBeCloseTo(100, 2);
            
    });

    test('should convert negative Fahrenheit to Celsius', () => {
      expect(temperatureConversion(-40, 'F', 'C')).toBeCloseTo(-40, 2);
      expect(temperatureConversion(-20, 'F', 'C')).toBeCloseTo(-28.89, 1);
      expect(temperatureConversion(0, 'F', 'C')).toBeCloseTo(-17.78, 1);
    });

    test('should handle Fahrenheit input as a string', () => {
      expect(temperatureConversion('32', 'F', 'C')).toBeCloseTo(0, 2);
      expect(temperatureConversion('50', 'F', 'C')).toBeCloseTo(10, 2);
      expect(temperatureConversion('77', 'F', 'C')).toBeCloseTo(25, 2);
    });

    test('should handle case-insensitive Celsius input', () => {
      expect(temperatureConversion(32, 'F', 'c')).toBeCloseTo(0, 2);
      expect(temperatureConversion(50, 'F', 'C')).toBeCloseTo(10, 2);
      expect(temperatureConversion(77, 'F', 'c')).toBeCloseTo(25, 2);
    });
  });

  describe('Celsius to Fahrenheit', () => {
    test('should convert positive Celsius to Fahrenheit', () => {
      expect(temperatureConversion(0, 'C', 'F')).toBeCloseTo(32, 2);
      expect(temperatureConversion(10, 'C', 'F')).toBeCloseTo(50, 2);
      expect(temperatureConversion(25, 'C', 'F')).toBeCloseTo(77, 2);
      expect(temperatureConversion(100, 'C', 'F')).toBeCloseTo(212, 2);
    });

    test('should convert negative Celsius to Fahrenheit', () => {
      expect(temperatureConversion(-40, 'C', 'F')).toBeCloseTo(-40, 2);
      expect(temperatureConversion(-20, 'C', 'F')).toBeCloseTo(-4, 2);
      expect(temperatureConversion(-17.78, 'C', 'F')).toBeCloseTo(0, 1);
    });

    test('should handle Celsius input as a string', () => {
      expect(temperatureConversion('0', 'C', 'F')).toBeCloseTo(32, 2);
      expect(temperatureConversion('10', 'C', 'F')).toBeCloseTo(50, 2);
      expect(temperatureConversion('25', 'C', 'F')).toBeCloseTo(77, 2);
    });

    test('should handle case-insensitive Fahrenheit input', () => {
      expect(temperatureConversion(0, 'C', 'f')).toBeCloseTo(32, 2);
      expect(temperatureConversion(10, 'C', 'F')).toBeCloseTo(50, 2);
      expect(temperatureConversion(25, 'C', 'f')).toBeCloseTo(77, 2);
    });
  });
  describe('Same scale conversions', () => {
    test('should handle Celsius to Celsius conversion', () => {
      expect(temperatureConversion(0, 'C', 'C')).toBe(0);
      expect(temperatureConversion(100, 'C', 'C')).toBe(100);
      expect(temperatureConversion(-40, 'C', 'C')).toBe(-40);
    });

    test('should handle Fahrenheit to Fahrenheit conversion', () => {
      expect(temperatureConversion(32, 'F', 'F')).toBe(32);
      expect(temperatureConversion(212, 'F', 'F')).toBe(212);
      expect(temperatureConversion(-40, 'F', 'F')).toBe(-40);
    });  
  });

  describe('Error handling', () => {
    test('should throw an error for non-numeric temperature input', () => {
      expect(() => temperatureConversion('abc', 'C', 'F')).toThrow();
      expect(() => temperatureConversion(null, 'C', 'F')).toThrow();
      expect(() => temperatureConversion(undefined, 'C', 'F')).toThrow();
    });

    test('should throw an error for invalid conversion type', () => {
      expect(() => temperatureConversion(32, 'C', 'B')).toThrow();
      expect(() => temperatureConversion(0, 'C', 'X')).toThrow();
    });
  });

  describe('Kelvin support', () => { 
    test('should convert Celsius to Kelvin', () => {
      expect(temperatureConversion(0, 'C', 'K')).toBeCloseTo(273.15, 2);
      expect(temperatureConversion(10, 'C', 'K')).toBeCloseTo(283.15, 2);
      expect(temperatureConversion(25, 'C', 'K')).toBeCloseTo(298.15, 2);
      expect(temperatureConversion(100, 'C', 'K')).toBeCloseTo(373.15, 2);
    });

    test('should convert Fahrenheit to Kelvin', () => {
      expect(temperatureConversion(32, 'F', 'K')).toBeCloseTo(273.15, 2);
      expect(temperatureConversion(50, 'F', 'K')).toBeCloseTo(283.15, 2);
      expect(temperatureConversion(77, 'F', 'K')).toBeCloseTo(298.15, 2);
      expect(temperatureConversion(212, 'F', 'K')).toBeCloseTo(373.15, 2);
    });

    test('should convert Kelvin to Celsius', () => {
      expect(temperatureConversion(273.15, 'K', 'C')).toBeCloseTo(0, 2);
      expect(temperatureConversion(283.15, 'K', 'C')).toBeCloseTo(10, 2);
      expect(temperatureConversion(373.15, 'K', 'C')).toBeCloseTo(100, 2);
    });

    test('should convert Kelvin to Fahrenheit', () => {
      expect(temperatureConversion(273.15, 'K', 'F')).toBeCloseTo(32, 2);
      expect(temperatureConversion(283.15, 'K', 'F')).toBeCloseTo(50, 2);
      expect(temperatureConversion(373.15, 'K', 'F')).toBeCloseTo(212, 2);
    });

    test('should handle case-insensitive Kelvin input', () => {
      expect(temperatureConversion(0, 'C', 'k')).toBeCloseTo(273.15, 2);
      expect(temperatureConversion(10, 'C', 'K')).toBeCloseTo(283.15, 2);
      expect(temperatureConversion(25, 'C', 'k')).toBeCloseTo(298.15, 2);
    });
    
    test('should handle Kelvin to Kelvin conversion', () => {
      expect(temperatureConversion(273.15, 'K', 'K')).toBe(273.15);
      expect(temperatureConversion(300, 'K', 'K')).toBe(300);
      expect(temperatureConversion(0, 'K', 'K')).toBe(0); 
    });
  });
});
