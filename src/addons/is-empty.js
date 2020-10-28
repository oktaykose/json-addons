module.exports = Array.prototype.isEmpty = function () {
    return Object.keys(this).length === 0 && this.constructor === Object
}