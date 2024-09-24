const removeProtocol = (url) => {
    const noProtocolUrl = new URL(url).hostname
    return noProtocolUrl
}


// const removeProtocol = (url) => {
//     let rawPath = url.split('://')
//     rawPath.shift()
//     const noProtocolUrl= rawPath.join('')
//     return noProtocolUrl
// }

module.exports = {
    removeProtocol
}