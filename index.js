var COLLATION = require('./collation');
function isArray(arr) {
    return arr instanceof Array;
}

/**
 * check array sorted
 * @param array
 * @param compare 'ASC' or 'DESC'
 * @returns {boolean}
 */
function sorted(array, compare = COLLATION.ASC) {
    if (isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            const a = array[i];
            const b= array[i+1];

            if (compare(a, b) > 0) return false;
        }
    } else {
        throwError('It is not an array.Please enter an array')
    }
    return true;
};
module.exports = sorted;
