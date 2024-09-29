const checkValidUrl = (url) => {
    const urlObject = new URL(url)

    if (urlObject.origin === 'null') {
        return undefined
    } else {
        return urlObject.origin
    }
}

module.exports = {
    checkValidUrl
}