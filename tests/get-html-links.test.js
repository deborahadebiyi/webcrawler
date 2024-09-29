/**
 * @jest-environment jsdom
 */

const { getHtmlLinks } = require('../src/get-html-links')

describe('getHtmlLinks', () => {
    const innerHTML = 
    `<html>
        <body>
            <div>
                <a href="/page2"> Page 2 </a>
                <a href="/welcome"> Welcome </a>
                <a href="https://monzilla.com/"> Page 2 </a> <!-- Corrected URL format -->
            </div>
        </body>
    </html>`

    it('should return an array of urls', () => {
        const url = 'http://monzino.com'
        const actual = getHtmlLinks(url, innerHTML)
        const expected = [
            url, 
            'http://monzino.com/page2', 
            'http://monzino.com/welcome', 
            'https://monzilla.com/' // Ensure this is correct
        ]
        expect(actual).toEqual(expected)
    })
})
