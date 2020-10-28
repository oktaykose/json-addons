const sortByValue = require('./addons/sort-by-value')
const filterByValue = require('./addons/filter-by-value')
const stringify = require('./addons/stringify')
const parse = require('./addons/parse')
const isEmpty = require('./addons/is-empty')

const addons = {
    sortByValue,
    filterByValue,
    stringify,
    parse,
    isEmpty
}

module.exports = addons