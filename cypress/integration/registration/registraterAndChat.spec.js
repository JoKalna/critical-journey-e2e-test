beforeEach(() => {
    // beforeEach function used so that it runs before each test
    cy.visit('https://unibuddy.co/pwa/demo-university/auth/register')
    cy.get('#onetrust-accept-btn-handler').click()
})

let user;

describe('First Registration page that Student is presented in order to start to chat with mentor', () => {
    before(function () {
        cy.task("registerNewUser").then((object) => {
            user = object;
        })
    })
    it('should fill registration form', () => {
        cy.get('#first-name')
            .type(user.firstName)
            .should('not.contain', 'a required field') // assert that no validation is pressent
        cy.get('#last-name')
            .type(user.lastName)
            .should('not.contain', 'a required field')
        cy.get('#email')
            .type(user.email)
            .should('not.contain', 'a required field')
        cy.get('#password')
            .type(user.password)
            .should('not.contain', 'a required field')
        // will use the same password as previously
        cy.get('#confirm-password')
            .type(user.password)
            .should('not.contain', 'a required field')
        cy.privacyAndStartToChatSubmitionBtn()
        // assert name matches(user.firstName) ? 
        cy.get('#country > .css-1uxuzzt-control > .css-1hwfws3').click()
        cy.get('[id^="react-select-2-option"]').then(option => {
            option[12].click()
        })
        cy.get('[data-test-id="degree-level"]')
            .select('Undergraduate (Bachelors)')
            .should('contain', 'Undergraduate')
        cy.get('#degrees > div.css-1uxuzzt-control > div.css-1hwfws3 > div.css-sgatqi-placeholder')
            .type('BA{enter}')
        cy.get('#react-select-3-option-0')
            .click()
        cy.get('#localePreference > div').click();
        cy.get('[id^="react-select-4-option"]').then(option => {
            option[1].click()
        })
        // for some reason this did not come up when I am using the cypress test runner so had to use '[data-test-id="label-marketing"]') to proceed
        // cy.get('[data-test-id="label-privacy"]').click()
        cy.get('[data-test-id="label-marketing"]')
            .click();
        cy.get('#continue')
            .click()
        // Inputting message in the chatbox and verify that you can send a message.     
        cy.get(':nth-child(1) > ._2qHr > ._1lC1')
            .click()
        cy.get('[data-test-id="chat-container"]')
            .should('exist', 'have.length')
        cy.get('[data-test-id="chat-input-send-Desktop"]')
            .should('be.disabled')
        cy.get('[data-test-id="chat-input-field"]')
            .type(user.chatSentence)
        cy.get('[data-test-id="chat-input-send-Desktop"]')
            .click()

        // should get this assertion working! 
        // cy.get('[data-test-id="chat-message-bubble"] span[class^=_3npN]')
        //     .should('eq', user.chatSentence);

        // should verify that BA media is found
        // cy.get('#degrees > div.css-1uxuzzt-control > div.css-1hwfws3 > div.css-1rxz0c-multiValue > div.css-7gynj3')
        //     .should('contain', 'BA Media')
    })

})
