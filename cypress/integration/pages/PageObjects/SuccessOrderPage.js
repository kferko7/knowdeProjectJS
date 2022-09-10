import * as CONFIG from '../../../../cypress.json'
import { BasePage } from './BasePage'

export class SuccessOrderPage extends BasePage {
	
	visit() {
		//cy.visit(`${CONFIG.env}/`)
		(Cypress.env('HOME_PAGE_URL'))
	}
   
    assertSauceLabsBackpack() {
        cy.get('a#item_4_title_link > div').should('be.visible', {
            timeout: 10000,
        })

    }

	//find locator by customized by data test
    addAddSauceLabsBackpackToCart() {
        cy.get("button[data-test='add-to-cart-sauce-labs-backpack']").should('be.visible').click()
        
    }
    
	//find locator by Class
    navigateToCart(){
        cy.get('.shopping_cart_badge').click()
    }

	//find its lenghth 
    assertItemQuantityIntoCart() {
    //cy.get('.cart_quantity').should('have.length', 1)
	cy.get('.cart_quantity')
	.its('length')
	.should('eq', 1)
    }
    
    //find locator by id
    checkoutButton(){
	cy.get('#checkout').click()
}
	//find locator by Id
    fillFirstName(value) {
		const field = cy.get("#first-name")
		field.clear()
		field.type(value)
		return this
	}
    
	//find locator by CSS
    fillLastName(value) {
		const field = cy.get("#last-name")
		field.clear()
		field.type(value)
		return this
	}

    //find locator by customized name
    fillZipCode(value) {
		const field = cy.get("[name='postalCode']")
		field.clear()
		field.type(value)
		return this
	}

	//has price --find by css locator
	assertPrice() {
		cy.get('.inventory_item_price').contains('$29.99')
		cy.get('.summary_total_label').contains('Total: $32.39')

	}
    //find locator by customized name
    continueButton() {
		cy.get("input[name=continue]")
			.should('be.visible', {
				timeout: 10000,
			})
			.click()
	}

	//find locator by Css
    finishButton() {
		cy.get('button#finish').click()
	}

	//assert with text displayed order complete
	expectedCheckoutComplete() {
		cy.get("h2").contains('THANK YOU FOR YOUR ORDER', {
			timeout: 10000,
		})
		
	}

}