const convertString = require('../helpers/convert-string')
const characterCounter = require('../helpers/character-counter')

module.exports = Array.prototype.sortByValue = function (key, value) {

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