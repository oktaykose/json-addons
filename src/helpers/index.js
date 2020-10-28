const characterCounter = (string, char) => {
    return string.split(char).length - 1
}

const convertString = phrase => {
    const maxLength = 100

    let returnString = phrase.toLowerCase()
    returnString = returnString.replace(/ö/g, 'o')
    returnString = returnString.replace(/ç/g, 'c')
    returnString = returnString.replace(/ş/g, 's')
    returnString = returnString.replace(/ı/g, 'i')
    returnString = returnString.replace(/ğ/g, 'g')
    returnString = returnString.replace(/ü/g, 'u')

    returnString = returnString.replace(/[^a-z0-9s-]/g, '')
    returnString = returnString.replace(/[s-]+/g, ' ')
    returnString = returnString.replace(/^s+|s+$/g, '')
    if (returnString.length > maxLength)
        returnString = returnString.substring(0, maxLength)
    returnString = returnString.replace(/s/g, '-')

    return returnString
}

module.exports = {
    characterCounter,
    convertString
}