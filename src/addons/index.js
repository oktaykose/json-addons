const { characterCounter, convertString } = require('../helpers')

const filterByValue = Array.prototype.filterByValue = function (key, value, isIncluded = true) {
    const checkRules = (key, val) => {
        let _key = convertString(key).toUpperCase(),
            _val = convertString(val).toUpperCase()

        if (isIncluded === false)
            return !_key.includes(_val)

        return _key.includes(_val)
    }

    return this.reduce((acc, elem) => checkRules(elem[key], value) ? acc.concat(elem) : acc, []);
}

const sortByValue = Array.prototype.sortByValue = function (key, value) {

    const prioritization = (key, val) => {
        let valUpper = val.toUpperCase()
        let valArray = valUpper.split('')
        let keyUpper = key.toUpperCase()

        let score = 0
        valArray.forEach(char => (score = score + characterCounter(keyUpper, char)))

        return score
    }

    let newObj = []
    this.forEach(val => {
        let _key = convertString(val[key]).toUpperCase()
        let _val = convertString(value).toUpperCase()

        val.score = prioritization(_key, _val)
        let indexOf = _key.indexOf(_val)
        val._priority = ((val.score + indexOf) * val.score) / 100
        val._index = indexOf === -1 ? NaN : indexOf
        val._include = _key.includes(_val)
        delete val.score
        newObj.push(val)
    })

    newObj = newObj
        .sort((a, b) => b._priority - a._priority)
        .sort((a, b) => b._include - a._include)
        .sort((a, b) => a._index - b._index)

    newObj.forEach(char => {
        delete char._priority
        delete char._include
        delete char._index
    })

    return newObj
}

const groupByKey = Array.prototype.groupByValue = function (key) {
    return this.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
}

const stringify = Array.prototype.stringify = function () {
    return JSON.stringify(this)
}

const parse = String.prototype.parse = function () {
    return JSON.parse(this)
}

const isEmpty = Array.prototype.isEmpty = function () {
    return Object.keys(this).length === 0 && this.constructor === Object
}

const isObject = Array.prototype.isObject = function () {
    return !Array.isArray(this) && typeof this === 'object'
}

module.exports = {
    sortByValue,
    filterByValue,
    groupByKey,
    stringify,
    parse,
    isEmpty,
    isObject
}