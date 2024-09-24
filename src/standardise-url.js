// const { removeCapitals } = require('./remove-capitals')
const { removeProtocol } = require('./remove-protocol')
const { removeTrailingSlash } = require('./remove-trailing-slash')

const standardiseUrl = (url) => {
    if (typeof url !== 'string') {
        throw new TypeError('Expected a string as input');
    }

    let noCapitals = url.toLowerCase()
    let noProtocol = removeProtocol(noCapitals)
    let noSlash = removeTrailingSlash(noProtocol)
    return noSlash
}

// console.log(standardiseUrl('http://PdckndcwCE.cPM/'))

module.exports = {
    standardiseUrl
}