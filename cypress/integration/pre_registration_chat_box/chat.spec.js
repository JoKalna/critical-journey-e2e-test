beforeEach(() => {
    // best would be reuse the session from previous test in chooseMentor.spec.js 
    cy.visit('/inbox/pre/609e54cf6eca6d2bbb0ff086?buddyPosition=1')
    cy.get('#onetrust-accept-btn-handler').click()
})
describe('Student presented with chat screen pre-reg process', () => {

    it('should have Create your account displayed in the chat box', () => {
        cy.get('[data-test-id="chat-container"] div[class^=tzcn]')
            .contains('Create your account')
    })

    it('should have Send button state disabled for none logged in users', () => {
        cy.get('[data-test-id="chat-input-send-Desktop"]')
            .should('be.disabled')
    })

    it('should have `Start chatting` now button present and user can click on it', () => {
        cy.get('#register')
            .should('contain', 'Start chatting now')
            .click()
        cy.url()
            .should('include', 'pwa/demo-university/auth/register?buddyPosition')

    })
})
