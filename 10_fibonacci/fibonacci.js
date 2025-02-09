function recursive_fibonacciSequenceBuilder(index) {
	if (index == 0 || index == 1) {
		return index;
	}

	const previousNumber = recursive_fibonacciSequenceBuilder(index - 1);
	const secondPreviousNumber = recursive_fibonacciSequenceBuilder(index - 2);
	const currentNumber = previousNumber + secondPreviousNumber;
	return currentNumber;
}

function iterative_fibonacciSequenceBuilder(index) {
	let secondPreviousNumber = 0;
	let previousNumber = 1;
	let currentNumber = 0;
	if (index == 0 || index == 1) {
		return index;
	}

	for (let i = 1; i < index; i++) {
		currentNumber = secondPreviousNumber + previousNumber;
		[secondPreviousNumber, previousNumber] = [previousNumber, currentNumber];
	}

	return currentNumber;
}

const fibonacci = function (number) {
	if (typeof number == "string") {
		number = parseInt(number);
	}

	if (number < 0) {
		return "OOPS";
	}
	return recursive_fibonacciSequenceBuilder(number);
};

// Do not edit below this line
module.exports = fibonacci;
