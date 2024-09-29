process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
const { standardiseUrl } = require('./standardise-url')

const getDomainLinks = (baseUrl, linksArray) => {
    try{
        const domainLinks = []

        for (const links of linksArray) {
            if (links.includes(baseUrl)) {
                domainLinks.push(links)

            }
        }

        const standardisedDomainLinks = standardiseUrl(domainLinks)

        return standardisedDomainLinks


    } catch(error){
        console.log('Error completing operation', error)
    }
}

module.exports = {
    getDomainLinks
}


