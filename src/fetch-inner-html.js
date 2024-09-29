const { JSDOM } = require('jsdom')

const fetchInnerHtml = async (url) => {
    try {
        const response = await fetch(url)

        if (response.status > 399) {
            return
        }        

        const text = await response.text()
        const dom = new JSDOM(text)
        const document = dom.window.document
        const innerHtml = document.documentElement.innerHTML
        return innerHtml
        
    } catch (error) {
        return
    }
}

module.exports = { fetchInnerHtml }