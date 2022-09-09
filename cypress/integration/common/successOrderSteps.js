import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { SuccessOrderPage } from '../pages/PageObjects/SuccessOrderPage'
import * as LoginData from '../../fixtures/loginData.json'
import * as FormData from '../../fixtures/formData.json'

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

And('I Click CHECKOUT button', () => {
    successOrderPage.checkoutButton()
})

And('I Fill form with data required and click continue button', () => {
    successOrderPage.fillFirstName(FormData.firstname)
    successOrderPage.fillLastName(FormData.lastname)
    successOrderPage.fillZipCode(FormData.zipcode)
    successOrderPage.continueButton()
})

And('I click Finish button', () => {
    successOrderPage.finishButton()
})

Then('I should see message THANK YOU FOR YOUR ORDER on Checkout page', () => {
    successOrderPage.expectedCheckoutComplete()
})
