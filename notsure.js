// const { removeCapitals } = require('./src/remove-capitals')


// const crawledUrls = []

// const getLinks = (baseUrl) => {

  
//     const pageLinks = [baseUrl]
//     const links = Element.getElementsByTagName("a")


//     for( const link of links) {
//         removeCapitals(link)
//         // link.includes(baseUrl)? link = false : pageLinks.push(link)
//     }

//     crawledUrls.push(pageLinks)
//     return pageLinks

//     console.log('Crawling complete')
// }



    //     for (const currentLink of domainLinks) {
    //   const isValid = checkValidUrl(currentLink); // Check if the link is valid

    //   if (isValid && !visitedPages[currentLink]) { // Proceed only if valid and not visited
    //     // Fetch inner HTML of the valid link
    //     const html = await fetchInnerHtml(currentLink);

    //      if (!html) {
    //         console.log(`Skipping ${currentLink} due to 404 or missing HTML.`);
    //         continue;
    //       }

    //     // Get the links from the current page's HTML
    //     const pageLinks = getHtmlLinks(currentLink, html);

    //     // Add current link and its associated links to the visitedPages object
    //     visitedPages[currentLink] = pageLinks;

    //     // Optionally, add more valid domain links to the crawling list if necessary:
    //     domainLinks.push(...pageLinks.filter(link => link.includes(validUrl)));
    //   }
    // }

    // console.log("Crawled Pages:", visitedPages);
    // return visitedPages;
