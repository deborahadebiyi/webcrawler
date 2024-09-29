process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
const { getDomainLinks } = require('.//src/get-domain-links')
const { checkValidUrl } = require('./src/check-valid-url')
const { fetchInnerHtml } = require('./src/fetch-inner-html')
const { getHtmlLinks } = require('./src/get-html-links')

const crawlWeb = async(url) => {
    
    try{
        // 1.
        let visitedPages = {} // object to be returned at the end of the operation
        let allDomainLinks = [] // keeps list of array elements with url as arr[0] and all links on same domain
        let allPageLinks = [] // keeps list of array elements with url as arr[0] and all links on that page 
        let visitedUrls = [] // keeps track of all urls that have been fetched, this will be used as the keys in the visitedPagesObject

        const validUrl = checkValidUrl(url)
        const innerHtml = await fetchInnerHtml(validUrl)
        const links = getHtmlLinks(validUrl, innerHtml)
        const domainLinks = getDomainLinks(validUrl, links)

        allDomainLinks.push(domainLinks)
        allPageLinks.push(links)
        visitedUrls.push(links[0])
        visitedPages[links[0]] = links.slice(1)
        


        // 2.
        for(let i=0; i < allDomainLinks.length; i++){
            for (let j = 1; j < allDomainLinks[i].length; j++){
                //console.log('HALPP',allDomainLinks[i][j])
                if (!visitedUrls.includes(allDomainLinks[i][j])) {
                    let resHtml = await fetchInnerHtml(allDomainLinks[i][j])
                    let resLinks = getHtmlLinks(allDomainLinks[i][j], resHtml)
                    let resDomainLinks = getDomainLinks(allDomainLinks[i][j], resLinks)

                    visitedUrls.push(allDomainLinks[i][j])
                    allDomainLinks.push(resDomainLinks)
                    allPageLinks.push(resLinks)

                    //STRETCH GOAL
                    //if failed to fetch, push to failedFetch array with the url of the page it was on
                    //as the first element. Created failed object, can be used to clean up broken links
  
                }

                // if (allDomainLinks[i][j].length === 1) {
                //     visitedPages[allDomainLinks[i][j]] = allDomainLinks[i][j]
                // } else {
                //     visitedPages[allDomainLinks[i][j]] = resLinks.slice(1)
                // }  

            }
            console.log(visitedPages)
            //console.log(visitedUrls)
            // console.log(allDomainLinks)
            // console.log(allPageLinks)
        }

        // console.log(visitedPages)
        // console.log(allPageLinks)
        // return visitedPages

    } catch(error){
        console.log('Error completing operation', error)
    }
}

console.log(crawlWeb('https://monzo.com'))

module.exports = { crawlWeb }