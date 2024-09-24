const { removeTrailingSlash } = require('../src/remove-trailing-slash')

describe('removeTrailingSlash', () => {
    it('should remove trailing slash if present in url', () => {
        const trailingSlashUrl = 'http://domain.com/'
        const actual = removeTrailingSlash(trailingSlashUrl)
        const expected = 'http://domain.com'
        expect(actual).toEqual(expected)
    })
    it('should not alter the url if there is no trailing slash', () => {
        const noSlashUrl = 'http:another.com'
        const actual = removeTrailingSlash(noSlashUrl)
        expect(actual).toEqual(noSlashUrl)
    } )
})