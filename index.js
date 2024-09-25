// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const { checkValidUrl } = require('./src/check-valid-url')
const { fetchInnerHtml } = require('./src/fetch-inner-html')
const { getHtmlLinks } = require('./src/get-html-links')

const webCrawler = async (url) => {

  try {
    
    let visitedPages = {}
    let domainLinks = []
    
    const validUrl = checkValidUrl(url)
    const innerHtml = await fetchInnerHtml(validUrl)
    const links = getHtmlLinks(validUrl, innerHtml)

    visitedPages[validUrl] = links.slice(1)

    for (const link of links) {
      if (link.includes(validUrl)) {
        domainLinks.push(link)
      }
    }
    
        for (const currentLink of domainLinks) {
      const isValid = checkValidUrl(currentLink); // Check if the link is valid

      if (isValid && !visitedPages[currentLink]) { // Proceed only if valid and not visited
        // Fetch inner HTML of the valid link
        const html = await fetchInnerHtml(currentLink);

         if (!html) {
            console.log(`Skipping ${currentLink} due to 404 or missing HTML.`);
            continue;
          }

        // Get the links from the current page's HTML
        const pageLinks = getHtmlLinks(currentLink, html);

        // Add current link and its associated links to the visitedPages object
        visitedPages[currentLink] = pageLinks;

        // Optionally, add more valid domain links to the crawling list if necessary:
        domainLinks.push(...pageLinks.filter(link => link.includes(validUrl)));
      }
    }

    console.log("Crawled Pages:", visitedPages);
    return visitedPages;



  } catch(error) {
    console.log('Error completing operation', error)
  }
}

console.log(webCrawler('https://monzo.com'))

module.exports = {
  webCrawler
}

/**
 * take baseUrl, standardise and add as first element to an array
 * get all links on that page
 * standardise all links using the functions
 * if link has same domain but different path, add as first element to new
 * array and push to top array
 * if link does not have the same domain, push to array
 * 
 * it should then go to next element in crawledUrls array and do the same 
 * process stops when there are no more pages with links that have the same domain
 * as the base url
 * it can then create the object and console log both with crawl complete
 * 
 */