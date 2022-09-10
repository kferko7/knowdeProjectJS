// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import * as LoginData from '../fixtures/loginData'

Cypress.on('uncaught:exception', err => false)
beforeEach(() => {
	cy.viewport(576, 960)
	//cy.viewport(820, 1180)
	//cy.viewport(1920, 1080)
	Cypress.Cookies.preserveOnce('CookieControl')
	//cy.clearCookies()
	cy.window().then(win => {
		win.sessionStorage.clear()
	})

	cy.clearCookie('CookieControl')
	
})
require('cypress-xpath')

