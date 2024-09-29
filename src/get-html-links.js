const { TextEncoder, TextDecoder } = require('util')
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder
const { JSDOM } = require('jsdom')

const getHtmlLinks = (url, htmlInnerBody) => {
    const urls = [url]

    const dom = new JSDOM(htmlInnerBody)
    const links = dom.window.document.getElementsByTagName('a')

    for(const link of links){
        if(link.href[0] === '/'){
            urls.push(`${url}${link.href}`)
        }else{
           urls.push(link.href)
        }
    }
    return urls
}

module.exports = {
    getHtmlLinks
}