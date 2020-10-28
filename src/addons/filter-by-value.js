const convertString = require('../helpers/convert-string')

module.exports = Array.prototype.filterByValue = function (key, value, isContaing = true, isCaseSensitive = true) {
    const checkRules = (key, val) => {
        let _key = key,
            _val = val
        if (isCaseSensitive === false)
            _key = convertString(_key).toUpperCase()
        _val = convertString(_val).toUpperCase()

        if (isContaing === false)
            return !_key.includes(_val)

        return _key.includes(_val)
    }

    return this.reduce((acc, elem) => checkRules(elem[key], value) ? acc.concat(elem) : acc, []);
}