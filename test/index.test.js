import sorted from "../index"
import assert from 'assert'
import fixtures from './fixtures'
var COLLATION = require('../collation');
console.log(COLLATION)

describe('Array sorts checked', function () {
    fixtures.forEach(function (f) {
        it(`return ${f.expected} for ${f.array}`, function () {
            var actual = sorted(f.array, f.comparator === undefined ? COLLATION.ASC: COLLATION.DESC);
            assert.strictEqual(actual, f.expected)
        } )
    })

})