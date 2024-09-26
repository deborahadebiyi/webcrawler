process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
const { checkValidUrl } = require('./src/check-valid-url')
const { fetchInnerHtml } = require('./src/fetch-inner-html')
const { getHtmlLinks } = require('./src/get-html-links')
const { standardiseUrl } = require('./src/standardise-url')

const getDomainLinks = async (url) => {

    try {
        let domainLinks = []

        const validUrl = checkValidUrl(url)
        const innerHtml = await fetchInnerHtml(validUrl)
        const links = getHtmlLinks(validUrl, innerHtml)

        for (const link of links) {
            if (link.includes(validUrl)) {
                domainLinks.push(link)
            }
        }

        // console.log(domainLinks)
        const standardisedLinks = standardiseUrl(domainLinks)

        return {
            validUrl,
            links,
            domainLinks,
            standardisedLinks
        }

    } catch (error) {
        console.log('Error completing operation', error)
    }
}

module.exports = {
    getDomainLinks
}