/// <reference types ="Cypress" />

describe('Get Api random cat', () => {
	let accessToken =
		'Bearer your accessToken'
	it('get users', () => {
		cy.request({
			method: 'GET',
			url: 'https://catfact.ninja/fact?max_length=100',
			headers: {
				'authorization': 'Bearer' + accessToken
			}
		}).then((res) => {
			expect(res.status).to.eq(200)
						
		})
	})

})