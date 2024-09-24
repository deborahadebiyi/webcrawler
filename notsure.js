const { removeCapitals } = require('./src/remove-capitals')


const crawledUrls = []

const getLinks = (baseUrl) => {

  
    const pageLinks = [baseUrl]
    const links = Element.getElementsByTagName("a")


    for( const link of links) {
        removeCapitals(link)
        // link.includes(baseUrl)? link = false : pageLinks.push(link)
    }

    crawledUrls.push(pageLinks)
    return pageLinks

    console.log('Crawling complete')
}

