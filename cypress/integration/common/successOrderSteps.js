import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { SuccessOrderPage } from '../pages/PageObjects/SuccessOrderPage'
import * as LoginData from '../../fixtures/loginData.json'

const successOrderPage = new SuccessOrderPage()

When('I Add Sauce Labs Backpack to cart', () => {
    successOrderPage.assertSauceLabsBackpack()
    successOrderPage.addAddSauceLabsBackpackToCart()
})

Then('I Navigate to /cart.html', () => {
    successOrderPage.navigateToCart()

})

And('I check one quantity Item is there', () => {
    successOrderPage.assertItemQuantityIntoCart()

})
