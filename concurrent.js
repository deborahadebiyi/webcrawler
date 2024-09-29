process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
const { getDomainLinks } = require('.//src/get-domain-links')
const { checkValidUrl } = require('./src/check-valid-url')
const { fetchInnerHtml } = require('./src/fetch-inner-html')
const { getHtmlLinks } = require('./src/get-html-links')

const crawlWeb = async (url, concurrencyLimit = 5) => {
    try {
        let visitedPages = {}; // Object to be returned at the end of the operation
        let allDomainLinks = []; // Keeps list of array elements with url as arr[0] and all links on the same domain
        let allPageLinks = []; // Keeps list of array elements with url as arr[0] and all links on that page
        let visitedUrls = new Set(); // Keeps list of all visited urls to avoid duplicates
        let queue = []; // A queue to manage URLs to be crawled

        // Helper function to process each URL
        const processUrl = async (currentUrl) => {
            if (!visitedUrls.has(currentUrl)) {
                try {
                    const resHtml = await fetchInnerHtml(currentUrl);
                    if (resHtml) {
                        let resLinks = getHtmlLinks(currentUrl, resHtml);
                        let resDomainLinks = getDomainLinks(currentUrl, resLinks);

                        visitedUrls.add(currentUrl);
                        allDomainLinks.push(resDomainLinks);
                        allPageLinks.push(resLinks);

                        // Update visitedPages
                        visitedPages[currentUrl] = resLinks.length > 1 ? resLinks.slice(1) : [currentUrl];

                        // Add domain links to the queue
                        queue.push(...resDomainLinks);
                    }
                } catch (error) {
                    // Ignore 404s and other errors, continue crawling
                }
            }
        };

        // Start the crawling with the initial URL
        const validUrl = checkValidUrl(url);
        const innerHtml = await fetchInnerHtml(validUrl);
        const links = getHtmlLinks(validUrl, innerHtml);
        const domainLinks = getDomainLinks(validUrl, links);

        allDomainLinks.push(domainLinks);
        allPageLinks.push(links);
        visitedUrls.add(links[0]);
        visitedPages[links[0]] = links.slice(1);

        // Add the domain links to the queue
        queue.push(...domainLinks);

        // Process the queue with concurrency control
        while (queue.length > 0) {
            // Take up to `concurrencyLimit` URLs from the queue
            const batch = queue.splice(0, concurrencyLimit);
            
            // Process the current batch of URLs concurrently
            await Promise.all(batch.map(url => processUrl(url)));

            // Log progress (optional)
            console.log("Visited URLs:", visitedUrls.size);
            console.log("Queue size:", queue.length);
        }

        console.log("Crawl complete");
        console.log(visitedPages)
        // return visitedPages;

    } catch (error) {
        console.log('Error completing operation', error);
    }
};

console.log(crawlWeb('https://monzo.com'))

module.exports = { crawlWeb }
