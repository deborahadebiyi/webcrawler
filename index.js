process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
const { getDomainLinks } = require('./src/get-domain-links')


const webCrawler = async (url) => {

  try {

    const visitedPages = {} //empty object to pus url and associated links
    const pageLinks = await getDomainLinks(url)

    visitedPages[pageLinks.validUrl] = pageLinks.links.slice(1)

    // for (const links of pageLinks.standardisedLinks) {
    //   const moreLinks = await getDomainLinks(links)
    //   visitedPages[moreLinks] = moreLinks.links.slice(1)
    // }

    const domainUrls = pageLinks.domainLinks
    for(let i =0; i < domainUrls; i++){
      let domainUrlKey = domainUrls[i]
      let domainUrlArr = await getDomainLinks(domainUrlKey)
      comnsole.log(visitedPages[domainUrlKey] = domainUrlArr.domainLinks)
    }

    console.log(visitedPages)

  } catch (error) {
    console.log('Error completing operation', error)
  }
}

// console.log(webCrawler('https://monzo.com'))
// console.log(webCrawler('https://boot.dev'))



module.exports = {
  webCrawler
}

