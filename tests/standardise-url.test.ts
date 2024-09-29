//MAYBE REMOVE
const { standardiseUrl } = require('../src/standardise-url')

describe('standardiseUrl', () => {
    it('should throw an error if arg is not a url', () => {
        const input = 'not an array'
        const actual = standardiseUrl(input)
        expect(actual).toThrow(TypeError)
        expect(actual).toThrow('Expected an array as input')
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