import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { LoginPage } from '../pages/PageObjects/LoginPage'
import * as LoginData from '../../fixtures/loginData.json'

const loginPage = new LoginPage()

//1.Positive Login: Login with valid credentials into Login form
//TC02: Success Login
Given('I login with valid credentials', () => {
	loginPage.visit()
	loginPage.fillUsername(LoginData.username)
	loginPage.fillPassword(LoginData.password)
})

When('I click on Login button', loginButton => {
	loginPage.loginButton()
})

Then('I should be able to login successfully to the Website', () => {
	cy.url().should('include', 'com')
})

And ('I logout', ()=>{
	loginPage.logoutButton()
})

//2.Negative Login: Input invalid username and valid password into Login form
//TC01: Login form validation
When('I login with invalid username and valid password', () => {
	cy.viewport(820, 1180)
	loginPage.fillUsername(LoginData.invalidusername)
	loginPage.fillPassword(LoginData.password)
})

When('I click on Login button', () => {
	loginPage.loginButton()
})

Then('I should see information Your email or password is incorrect!', () => {
	loginPage.expectErrorWrongUsername()
})

//3.Negative Login: Input invalid password and valid username into Login form
//TC01: Login form validation
When('I login with invalid password and valid username', () => {
	cy.viewport(1920, 1080)
	loginPage.fillUsername(LoginData.username)
	loginPage.fillPassword(LoginData.invalidpassword)
})

When('I click on Login button', () => {
	loginPage.loginButton()
})

Then('I should see information Your email or password is incorrect!', () => {
	loginPage.expectedErrorWrongPassword()
})

//4.Negative Login: Login with empty credentials into Login form
//TC01: Login form validation
When('I click on Login button', submit => {
	cy.viewport(1000, 600)
	loginPage.loginButton()
})

Then('I should be asked to enter credentials', () => {
	loginPage.expectedErrorEmptyCredentials()
})
