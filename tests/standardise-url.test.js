const { standardiseUrl } = require('../src/standardise-url')

describe('standardiseUrl', () => {
    it('should throw an error if arg is not a url', () => {
        const input = 'not an array'
        expect(() => standardiseUrl(input)).toThrow(TypeError)
        expect(() => standardiseUrl(input)).toThrow('Expected an array as input')
    })
    it('should standardise the given array', () => {
        const givenArr = [
            'http://someTHIng.com/',
            'httP://another.com/yhyh',
            'httP://DOMAIN.com'
        ]
        const actual = standardiseUrl(givenArr)
        const expected = [
            'http://something.com',
            'http://another.com/yhyh',
            'http://domain.com'
        ]
 
        expect(actual).toEqual(expected)
    })
})