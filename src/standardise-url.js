const { removeTrailingSlash } = require('./remove-trailing-slash')

const standardiseUrl = (urlArr) => {
    if (!Array.isArray(urlArr)) {
        throw new TypeError('Expected an array as input')
    }

    const noCapitals = urlArr.map(url => url.toLowerCase())
    const noSlash = noCapitals.map(n => removeTrailingSlash(n))
    const noDuplicates = [...new Set(noSlash)]

    return noDuplicates
}

module.exports = {
    standardiseUrl
}