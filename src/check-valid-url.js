const checkValidUrl = (url) => {
    const urlObject = new URL(url)

    if (urlObject.origin === 'null') {
        return undefined
    } else {
        return urlObject.origin
    }
}

// console.log(checkValidUrl('http://hello.com'))

module.exports = {
    checkValidUrl
}