// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import * as LoginData from '../fixtures/loginData'

Cypress.on('uncaught:exception', err => false)
beforeEach(() => {
	Cypress.Cookies.preserveOnce('CookieControl')
	//cy.clearCookies()
	cy.window().then(win => {
		win.sessionStorage.clear()
	})

	cy.clearCookie('CookieControl')
})
require('cypress-xpath')

