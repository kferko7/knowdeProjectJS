Feature: SuccessOrder
   
    Background: Positive Login: Login with valid credentials into Login form
        Given I login with valid credentials
        When I click on Login button
        Then I should be able to login successfully to the Website
      
  
 #TC03: SuccessOrder
     Scenario: Success Order
     When I Add Sauce Labs Backpack to cart
     Then I Navigate to /cart.html
     And I check one quantity Item is there
     And I Click CHECKOUT button
     And I Fill form with data required and click continue button
     And I check Item total price and click Finish button 
     Then I should see message THANK YOU FOR YOUR ORDER on Checkout page