const { standardiseUrl } = require('../src/standardise-url')

describe('standardiseUrl', () => {
    it('should standardise the given url', () => {
        const givenUrl1 = 'http://someTHIng.com/'
        const actual1 = standardiseUrl(givenUrl1)
        const expected1 = 'something.com'

        const givenUrl2 = 'httP://another.com/yhyh'
        const actual2 = standardiseUrl(givenUrl2)
        const expected2 = 'another.com'
        
        expect(actual1).toEqual(expected1)
        expect(actual2).toEqual(expected2)
    })
})