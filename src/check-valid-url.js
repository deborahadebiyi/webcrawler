// const checkValidUrl = (url) => {
//     const urlObject = new URL(url)

//     if (urlObject.origin !== 'null') {
//         return urlObject.origin 
//     }else {
//         console.log("Invalid URL");
//         return null; // Return null explicitly for invalid URLs
//     }
// }
const checkValidUrl = (url) => {
    try {
        const urlObject = new URL(url);
        
        // Check if the origin is not null and the protocol is either 'http:' or 'https:'
        if (urlObject.origin && (urlObject.protocol === 'http:' || urlObject.protocol === 'https:')) {
            return urlObject.origin;
        } else {
            console.log("Invalid URL");
            return null; // Explicitly return null for invalid URLs
        }
    } catch (e) {
        console.log("Invalid URL");
        return null; // Return null for URLs that cause an exception
    }
};



console.log(checkValidUrl('hp:mcv.xc'))
// console.log(checkValidUrl('http://hello.com'))

module.exports = {
    checkValidUrl
}