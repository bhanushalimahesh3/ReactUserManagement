/**
 * @author Shivam Bharadwaj
 * @description Cypress Demo
 */
//This is where your test suite starts
describe('My First Test', function () {
    //This function will execute before each test (i.e it())
    beforeEach(function () {
        //Visiting the url
        cy.visit('https://example.cypress.io')
    })
    //Here you actually writes your test (it() is similar to @Test annotaion of TestNG)
    it('Visits the Kitchen Sink', function () {
        //Click on type button
        cy.contains('type').click()
        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions')
        // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    })
})