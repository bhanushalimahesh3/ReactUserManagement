describe('Signup test case', function() {
    it('Visits home page', function() {
      cy.visit('/')
      cy.contains('a', 'Not have an account? Register now').click()
      cy.url().should('include', '/signup')
      
      cy.get('#name')
      .type('Harsh M Bhanushali')
      .should('have.value', 'Harsh M Bhanushali')

      cy.get('#email')
      .type('pooja@gmail.com')
      .should('have.value', 'pooja@gmail.com')

      cy.get('#pwd')
      .type('123')
      .should('have.value', '123')

      cy.get('#cpwd')
      .type('123')
      .should('have.value', '123')

      cy.contains('button', 'Signup').click()
      
    })
  })