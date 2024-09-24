const { removeCapitals } = require('../src/remove-capitals')

describe('removeCapitals', () => {
    it('should make the url lowercase', () => {})
    const testUrls = [
        'httP://SomeURl.com',
        'http://anotherone.com',
        'HTTP://UPPERCASE.COM'
    ]

    const expectedUrls = [
        'http://someurl.com',
        'http://anotherone.com',
        'http://uppercase.com'
    ]

    for(let i=0; i < testUrls.length; i++){
        expect(removeCapitals(testUrls[i])).toEqual(expectedUrls[i])
    }
})