const { removeTrailingSlash } = require('./remove-trailing-slash')

const standardiseUrl = (urlArr) => {
    if (!Array.isArray(urlArr)) {
        throw new TypeError('Expected an array as input');
    }

    const noCapitals = urlArr.map(url => url.toLowerCase())
    const noSlash = noCapitals.map(n => removeTrailingSlash(n))
    const noDuplicates = [...new Set(noSlash)]

    return noDuplicates
}

// console.log(standardiseUrl([
//             'http://someTHIng.com/',
//             'httP://another.com/yhyh',
//             'httP://DOMAIN.com'
//         ]))

// console.log(standardiseUrl([
//   'https://boot.dev',
//   'https://boot.dev/signup-flow',
//   'https://boot.dev/signup-flow',
//   'https://boot.dev/reviews',
//   'https://boot.dev/signup-flow',
//   'https://boot.dev/teams',
//   'https://boot.dev/gifts',
//   'https://boot.dev/redeem',
//   'https://boot.dev/signup-flow',
//   'https://boot.dev/tracks/backend',
//   'https://boot.dev/pricing',
//   'https://boot.dev/leaderboard',
//   'https://boot.dev/community',
//   'https://boot.dev/reviews',
//   'https://boot.dev/',
//   'https://boot.dev/playground/go',
//   'https://boot.dev/terms',
//   'https://boot.dev/privacy',
//   'https://boot.dev/sitemap.xml'
// ]))

module.exports = {
    standardiseUrl
}