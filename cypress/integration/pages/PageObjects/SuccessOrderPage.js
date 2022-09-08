import * as CONFIG from '../../../../cypress.json'
import { BasePage } from './BasePage'

export class SuccessOrderPage extends BasePage {
	visit() {
		cy.visit(`${CONFIG.env.url}/`)
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
    cy.get('.cart_quantity').should('have.length', 1)
    }
}