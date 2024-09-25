/**
 * @jest-environment jsdom
 */

const { getHtmlLinks } = require('../src/get-html-urls')

describe('getHtmlUrls', () => {
    beforeEach(() => {
        document.body.innerHTML = 
        `<html>
            <body>
                <div>
                    <a href="/page2"> Page 2 </a>
                    <a href="/welcome"> Welcome </a>
                    <a href="https:monzilla.com"> Page 2 </a>
                </div>
            </body>
        </html>

        `
    })
    it('should return an array of urls', () => {
        const url = 'http://monzino.com'
        const actual = getHtmlLinks(url)
        const expected = [url, 'http://monzino.com/page2', 'http://monzino.com/welcome', 'https:monzilla.com' ]
        expect(actual).toEqual(expected)
    })
})