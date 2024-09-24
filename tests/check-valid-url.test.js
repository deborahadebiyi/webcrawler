const { checkValidUrl } = require('../src/check-valid-url')

describe('checkValidUrl', () => {
    it('should return the url if valid', () => {
        const validUrl = 'http://valid.com'
        const actual = checkValidUrl(validUrl)
        const expected = validUrl
        expect(actual).toEqual(expected)

    })
    it('should return an error if url is invalid', () => {
        const invalidUrl = 'htw://incorrect.co'
        const actual = checkValidUrl(invalidUrl)
        const expected = undefined
        expect(actual).toEqual(expected)
    })
})