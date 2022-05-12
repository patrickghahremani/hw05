// hw5.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('first test', ()=>{
    it('login fail', ()=>{
        cy.visit('https://www.linkedin.com')
        cy.get('#session_password').type("password")
        cy.get('#session_key').type('test@gmail.com')
        cy.get('.sign-in-form__submit-button').click()
        expect(cy.contains("We couldn't find an account associated with test@gmail.com. Please try with an alternate email or phone number."))
    })

    it('login security check', ()=>{
        cy.visit('https://www.linkedin.com')
        cy.get('#session_password').type("password")
        cy.get('#session_key').type('test@gmail.com')
        cy.get('.sign-in-form__submit-button').click()
        expect(cy.contains("Let's do a quick security check"))
    })
})