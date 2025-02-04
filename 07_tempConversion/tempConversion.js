const convertToCelsius = function (fahrenheitTemp) {
	const celsiusTemp = ((fahrenheitTemp - 32) * 5) / 9;
	return parseFloat(celsiusTemp.toFixed(1));
};

const convertToFahrenheit = function (celsiusTemp) {
	const fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
	return parseFloat(fahrenheitTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
