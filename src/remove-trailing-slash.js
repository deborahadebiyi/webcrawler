const removeTrailingSlash = (url) => {

    let urlLength = url.length -1
    let newUrl = url.split('')
    newUrl[urlLength] === '/'? newUrl.pop() : false
    const noSlashUrl = newUrl.join('')
    return noSlashUrl
}

module.exports = {
    removeTrailingSlash
}