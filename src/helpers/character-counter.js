const characterCounter = (string, char) => {
    return string.split(char).length - 1
}

module.exports = characterCounter