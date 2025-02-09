const palindromes = function (string) {
    let cleanedString = string.toLowerCase().replace(/[.,!?]/g, "").replace(/\s+/g, "");
    let reverseString = cleanedString.split('').reverse().join("");
    return reverseString === cleanedString;

};

// Do not edit below this line
module.exports = palindromes;
