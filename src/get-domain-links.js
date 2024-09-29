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

// console.log(getDomainLinks('https://test.dev', [
//     'https://www.test.dev/u/gerep',
//     'https://test.dev/signup-flow',
//     'https://test.dev/reviews',
//     'https://blog.boot.dev/backend/how-long-to-become-backend-dev/',
//     'https://survey.test.co/2024/work',
//     'https://test.dev/signup-flow',
// ]))

module.exports = {
    getDomainLinks
}


