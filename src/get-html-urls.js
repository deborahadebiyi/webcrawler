const { JSDOM } = require('jsdom')

const getHtmlUrls = (url, htmlInnerBody) => {
    const urls = []

    urls.push(url)

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
    getHtmlUrls
}