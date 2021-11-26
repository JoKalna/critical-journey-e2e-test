beforeEach(() => {
    // best would be reuse the session from previous test in chooseMentor.spec.js 
    cy.visit('/inbox/pre/609e54cf6eca6d2bbb0ff086?buddyPosition=1')
    cy.get('#onetrust-accept-btn-handler').click()
})
describe('Student presented with chat screen pre-registrataion process', () => {
    it('should have Create your account displayed in the chat box', () => {
        cy.get('#dummy-chat > div > div > div > div > div._2ycq > div._1l42._16cz > div > div > div.tzcn')
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
