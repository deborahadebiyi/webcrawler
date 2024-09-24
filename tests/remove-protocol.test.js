const { removeProtocol } = require('../src/remove-protocol')

describe('removeProtocol', () => {
    it('should remove the protocol from a url', () => {
        const input = 'https://issatest.com'
        const call = removeProtocol(input)
        const result = 'issatest.com'
        expect(call).toEqual(result)
    })
})