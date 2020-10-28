module.exports = String.prototype.parse = function () {
    return JSON.parse(this)
}