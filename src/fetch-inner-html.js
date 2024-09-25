const { JSDOM } = require('jsdom')

const fetchInnerHtml = async (url) => {
    try {
        const response = await fetch(url)

        if (response.status > 399) {
            console.log(`Failed to fetch ${url}, status code: ${response.status}`)
            return
        }

        const text = await response.text()
        const dom = new JSDOM(text)
        const document = dom.window.document
        const innerHtml = document.documentElement.innerHTML
        return innerHtml
        
    } catch (error) {
        console.log('Error fetching the page', error)
    }
}

module.exports = { fetchInnerHtml}