describe('Login test case', function() {
    it('Visits login page', function() {
      cy.visit('/')
      cy.get('#email').type('pooja@gmail.com')
      cy.get('#pwd').type('123')
      cy.pause();
      //cy.contains('button', 'Login').click()
      cy.url().should('include', '/dashboard')
      cy.contains('button', 'Logout').click()

      // Get an input, type into it and verify that the value has been updated

      
    })
  })