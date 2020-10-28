const sortByValue = require('./addons/sort-by-value')
const filterByValue = require('./addons/filter-by-value')
const stringify = require('./addons/stringify')
const parse = require('./addons/parse')
const isEmpty = require('./addons/is-empty')
const isValid = require('./addons/is-valid')

const addons = {
    sortByValue,
    filterByValue,
    stringify,
    parse,
    isEmpty,
    isValid
}

module.exports = addons