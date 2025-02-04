const reverseString = function(string) {
    let reversedString = []
    for (const char of string) {
        reversedString.unshift(char);
    }

    return reversedString.join('');
};

// Do not edit below this line
module.exports = reverseString;
