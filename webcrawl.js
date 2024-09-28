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
        


        // 2.
        for(let i=0; i < allDomainLinks.length; i++){
            for (let j=1; j < allDomainLinks[i].length ; j++ ){

            }
        }




    } catch(error){
        console.log('Error completing operation', error)
    }
}

console.log(crawlWeb('https://boot.dev'))

module.exports = { crawlWeb }