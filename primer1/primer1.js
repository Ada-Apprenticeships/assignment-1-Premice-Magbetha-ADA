// temperatureConversion.js

function temperatureConversion(temperature, fromScale, toScale) {
  // Validate the input
  if (temperature === null || temperature === undefined || isNaN(Number(temperature))) {
    throw new Error("Invalid temperature input");
  }

  // Normalize fromScale and toScale to uppercase
  fromScale = fromScale?.toUpperCase();
  toScale = toScale?.toUpperCase();

  // Check if fromScale and toScale are valid
  const validScales = ['C', 'F', 'K'];
  if (!validScales.includes(fromScale) || !validScales.includes(toScale)) {
    throw new Error("Invalid conversion type or input scale");
  }

  // Helper functions for conversions
  function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  function toKelvinFromCelsius(celsius) {
    return celsius + 273.15;
  }

  function toCelsiusFromKelvin(kelvin) {
    return kelvin - 273.15;
  }

  function toKelvinFromFahrenheit(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9 + 273.15;
  }

  function toFahrenheitFromKelvin(kelvin) {
    return ((kelvin - 273.15) * 9) / 5 + 32;
  }

  // Convert temperature to a number
  const numericTemperature = Number(temperature);

  // Conversion logic
  if (fromScale === toScale) {
    // No conversion needed
    return numericTemperature;
  } else if (fromScale === 'C' && toScale === 'F') {
    return toFahrenheit(numericTemperature);
  } else if (fromScale === 'F' && toScale === 'C') {
    return toCelsius(numericTemperature);
  } else if (fromScale === 'C' && toScale === 'K') {
    return toKelvinFromCelsius(numericTemperature);
  } else if (fromScale === 'K' && toScale === 'C') {
    return toCelsiusFromKelvin(numericTemperature);
  } else if (fromScale === 'F' && toScale === 'K') {
    return toKelvinFromFahrenheit(numericTemperature);
  } else if (fromScale === 'K' && toScale === 'F') {
    return toFahrenheitFromKelvin(numericTemperature);
  }

  // This should never be reached due to prior validation
  throw new Error("Unexpected error during conversion");
}

module.exports = temperatureConversion;
