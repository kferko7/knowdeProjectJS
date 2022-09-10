import { LoginPage } from '../integration/pages/PageObjects/LoginPage'

const loginPage = new LoginPage()

Cypress.Commands.add('loginData', function (username, password) {
	loginPage.visit()
	loginPage.fillUsername(username)
	loginPage.fillPassword(password)
	loginPage.loginButton()
})

Cypress.Commands.add('isVisible', selector => {
	cy.get(selector).should('be.visible')
})

Cypress.Commands.add('isHidden', selector => {
	cy.get(selector).should('not.exist')
})

Cypress.Commands.add('setResolution', selector => {
	const sizes = ['iPhoneSE', 'iPad Air', 'Ubuntu 20.04.5 LTS', [576, 960][820, 1180][1920, 1080]]
	if (Cypress._.isArray(size)) {
		cy.viewport(size[0], size[1], size[2])
	} else {
		cy.viewport(size)
		//cy.visit('https://www.saucedemo.com')
	}
})
