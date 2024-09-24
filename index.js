const { checkValidUrl } = require('./src/check-valid-url')
const { standardiseUrl } = require('./src/standardise-url')

let crawledArray = []
let standardisedUrl

const webCrawler = (url) => {

  const validUrl = checkValidUrl(url)
  console.log(validUrl)

  // if (validUrl !== undefined) {
  //   standardisedUrl = standardiseUrl(standardiseUrl)
  //   console.log(standardiseUrl)
  // }

  // if (validUrl !== undefined) {
  //   standardisedUrl = standardiseUrl(standardiseUrl)
  //   return standardisedUrl

  // } else {
  //   console.error("Provided url is invalid")
  //   process.exit = 1
  // }

  // crawledArray.push([standardisedUrl])




  
}

console.log(webCrawler('https://monzo.com/*'))

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