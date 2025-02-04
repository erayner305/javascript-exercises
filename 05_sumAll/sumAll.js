const sumAll = function (num1, num2) {
    const ERROR_MESSAGE = "ERROR";
    if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
        return ERROR_MESSAGE
    }


	let startNum;
	let endNum;
	if (num2 < num1) {
		startNum = num2;
		endNum = num1;
	} else {
		startNum = num1;
		endNum = num2;
	}
	return endNum <= startNum ? startNum : endNum + sumAll(startNum, endNum - 1);
};

// Do not edit below this line
module.exports = sumAll;
