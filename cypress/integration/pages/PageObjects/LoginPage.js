import * as CONFIG from '../../../../cypress.json'
import { BasePage } from './BasePage'

export class LoginPage extends BasePage {
	visit() {
		cy.visit(`${CONFIG.env.url}/`)
	}

	assertPage() {
		cy.title().should('eq', 'Single Page Apps for GitHub Pages')
		cy.url().should('include', 'inventory.html')
	}

	//Method created and Inside located elements
	fillUsername(value) {
		const field = cy.get("#user-name")
		field.clear()
		field.type(value)
		return this
	}

	fillPassword(value) {
		const field = cy.get("#password")
		field.clear()
		field.type(value)
		return this
	}

	loginButton() {
		cy.get("[name='login-button']")
			.should('be.visible', {
				timeout: 10000,
			})
			.click()
	}

	logoutButton(){
		const ids =[
			'#react-burger-menu-btn',
			'#logout_sidebar_link'
		]
		ids.forEach(id => {
			cy.get(id).click()
		})
	}

	expectErrorWrongUsername() {
		cy.get("h3[data-test='error']").should('be.visible', {
			timeout: 10000,
		})
	}

	expectedErrorWrongPassword() {
		cy.get("h3[data-test='error']").should('be.visible', {
			timeout: 10000,
		})
	}

	expectedErrorEmptyCredentials() {
		cy.get("h3").contains('Epic sadface: Username is required').should('be.visible', {
			timeout: 10000,
		})
	}

	expectedErrorWrongCredentials() {
		cy.get("h3").contains('Epic sadface: Username and password do not match a').should('be.visible', {
			timeout: 10000,
		})
	}
	
}
