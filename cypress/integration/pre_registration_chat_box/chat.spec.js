beforeEach(() => {
    // best would be reuse the session from previous test in chooseMentor.spec.js 
    cy.visit('/inbox/pre/609e54cf6eca6d2bbb0ff086?buddyPosition=1')
    cy.get('#onetrust-accept-btn-handler').click()
})
describe('Student presented with chat screen pre-registrataion process', () => {
    it('should have chat-container with profile name and avatar ', () => {
        cy.get('#dummy-chat > div > div > div > div > div._1IE0 > div._3wKi > div > div >a')
            .should('have.attr', 'href', '/pwa/demo-university/buddies/students/609e54cf6eca6d2bbb0ff086?buddyPosition=1')
    })
    it('should have Send button state disabled for none logged in users', () => {

        cy.get('[data-test-id="chat-input-send-Desktop"]')
            .should('be.disabled')
    })
    // assert href?
    it('should have `Start chatting` now button present and user can click on it', () => {
        cy.get('#register')
            .should('contain', 'Start chatting now')
            .click()
    })


})
