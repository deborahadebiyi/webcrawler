const { getDomainLinks } = require('../src/get-domain-links')

describe('getDomainLinks', () => {
    it('should return an array of links with the same domain as the given url', () => {
        const array = [
            'https://www.test.dev/u/gerep',
            'https://test.dev/signup-flow',
            'https://test.dev/reviews',
            'https://blog.boot.dev/backend/how-long-to-become-backend-dev/',
            'https://survey.test.co/2024/work',
            'https://test.dev/signup-flow',
        ]
        const url = 'https://test.dev'
        const actual = getDomainLinks(url, array)
        const expected = [  
            "https://test.dev/signup-flow", "https://test.dev/reviews"]
        expect(actual).toEqual(expected)
    })
})