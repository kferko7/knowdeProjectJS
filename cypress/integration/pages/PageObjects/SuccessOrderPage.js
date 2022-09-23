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

    addAddSauceLabsBackpackToCart() {
        cy.get("button[data-test='add-to-cart-sauce-labs-backpack']").should('be.visible').click()
        
    }
    
    navigateToCart(){
        cy.get('.shopping_cart_badge').click()
    }

    assertItemQuantityIntoCart() {
    //cy.get('.cart_quantity').should('have.length', 1)
	cy.get('.cart_quantity')
	.its('length')
	.should('eq', 1)
    }

    checkoutButton(){
	cy.get('#checkout').click()
    }
	
    fillFirstName(value) {
		const field = cy.get("#first-name")
		field.clear()
		field.type(value)
		return this
	}
    
    fillLastName(value) {
		const field = cy.get("#last-name")
		field.clear()
		field.type(value)
		return this
	}

    fillZipCode(value) {
		const field = cy.get("[name='postalCode']")
		field.clear()
		field.type(value)
		return this
	}

	assertPrice() {
		cy.get('.inventory_item_price').contains('$29.99')
		cy.get('.summary_total_label').contains('Total: $32.39')

	}
   
    continueButton() {
		cy.get("input[name=continue]")
			.should('be.visible', {
				timeout: 10000,
			})
			.click()
	}

	finishButton() {
		cy.get('button#finish').click()
	}

	expectedCheckoutComplete() {
		cy.get("h2").contains('THANK YOU FOR YOUR ORDER', {
			timeout: 10000,
		})
		
	}

}