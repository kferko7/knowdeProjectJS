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

	//Customized locator
	fillUsername(value) {
		const field = cy.get("input[placeholder=Username]")
		field.clear()
		field.type(value)
		return this
	}

	//Id locator
	fillPassword(value) {
		const field = cy.get("#password")
		field.clear()
		field.type(value)
		return this
	}

	//Customized locator
	loginButton() {
		cy.get("[name='login-button']")
			.should('be.visible', {
				timeout: 10000,
			})
			.click()
	}

	//Const Id locators
	logoutButton(){
		const ids =[
			'#react-burger-menu-btn',
			'#logout_sidebar_link'
		]
		ids.forEach(id => {
			cy.get(id).click()
		})
	}

	//Find locator with data test
	expectErrorWrongUsername() {
		cy.get("h3[data-test='error']").should('be.visible', {
			timeout: 10000,
		})
	}
    
	//Find locator with data test
	expectedErrorWrongPassword() {
		cy.get("h3[data-test='error']").should('be.visible', {
			timeout: 10000,
		})
	}
    
	//Find locator with  contains text
	expectedErrorEmptyCredentials() {
		cy.get("h3").contains('Epic sadface: Username is required').should('be.visible', {
			timeout: 10000,
		})
	}
    
	//Find locator with  contains text
	expectedErrorWrongCredentials() {
		cy.get("h3").contains('Epic sadface: Username and password do not match a').should('be.visible', {
			timeout: 10000,
		})
	}
	
}
