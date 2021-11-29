beforeEach(() => {
    // best would be reuse the accessToken from previous test in chooseMentor.spec.js 
    cy.visit('/pwa/demo-university/inbox/pre/6123c95f97f1a2234816332d?buddyPosition=1')
    cy.get('#onetrust-accept-btn-handler').click()
})
describe('Student is presented with the chat screen during pre-reg process', () => {

    it('should have `Create your account` displayed in the chat container', () => {
        cy.get('[data-test-id="chat-container"] div[class^=tzcn]')
            .contains('Create your account')
    })

    it('should have Send button state disabled for none logged in users', () => {
        cy.get('[data-test-id="chat-input-send-Desktop"]')
            .should('be.disabled')
        cy.get('#login-tab')
            .invoke('attr', 'href')
            .should('contain', 'auth/register')
    })

    it('should have `Start chatting` now button present and user can click on it', () => {
        cy.get('#register')
            .should('contain', 'Start chatting now')
            .click()
        cy.url()
            .should('include', 'pwa/demo-university/auth/register?buddyPosition')
    })
})
