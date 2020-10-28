const convertString = require('../helpers/convert-string')

module.exports = Array.prototype.filterByValue = function (key, value, isIncluded = true) {
    const checkRules = (key, val) => {
        let _key = convertString(key).toUpperCase(),
            _val = convertString(val).toUpperCase()

        if (isIncluded === false)
            return !_key.includes(_val)

        return _key.includes(_val)
    }

    return this.reduce((acc, elem) => checkRules(elem[key], value) ? acc.concat(elem) : acc, []);
}