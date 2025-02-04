/**
 * 
 * @param {Array} array 
 * @param  {...any} args 
 */
const removeFromArray = function(array, ...args) {
    let reducedArray = array.filter((element) => {
        return args.indexOf(element) === -1
    })

    return reducedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
