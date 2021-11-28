beforeEach(() => {
    // beforeEach function used so that it runs before each test
    cy.visit('https://unibuddy.co/pwa/demo-university/auth/register')
    cy.get('#onetrust-accept-btn-handler').click()
    cy.viewport(1024, 768)

})
let user;

describe('First Registration page where validation is checked', () => {
    it('should display correct validation for fields when click Start to chat button', () => {
        cy.get('#continue')
            .click()
        cy.get('#first-name-error')
            .should('contain', 'First Name is a required field')
        cy.get('#last-name-error')
            .should('contain', 'Last Name is a required field')
        cy.get('#email-error')
            .should('contain', 'Email is a required field')
        cy.get('#password-error')
            .should('contain', 'Password is a required field')
        cy.get('#confirm-password-error')
            .should('contain', 'Confirm Password is a required field')
        cy.get('#privacy-error')
            .should('contain', 'Privacy Policy must be checked')
    })

    // improvement needed : should really check just email verification 
    it('should display correct validation for incorrect email submition attempt', () => {
        cy.get('#email')
            .type('te{enter}')
        cy.get('#email-error')
            .should('contain', 'Please enter a valid email address')
    })

    // Improvement -  Below code checks that the start to chat button does not allow enter incorrect data.
    // In theory this should really be told sooner to the student so they don't get as far as trying to submit rubish data. 

    it('should display correct validation for Start To Chat button after trying to register with unnacaptable submittion', () => {
        cy.get('#first-name')
            .type('fff')
            .should('not.contain', 'a required field') // assert that no validation is pressent
        cy.get('#last-name')
            .type('ff')
        cy.get('#email')
            .type('ffs£dafaf@com.ccc')
        cy.get('#password')
            .type('KalpKlap')
        cy.get('#confirm-password')
            .type('KalpKlap')
        cy.privacyAndStartToChatSubmitionBtn()
        cy.get('[data-test-id="error-message-text"]')
            .should('contain', 'Please enter a valid email, password and name')
    })
    // add assertion for password field 

})
