beforeEach(() => {
    // beforeEach function used so that it runs before each test
    cy.visit('https://unibuddy.co/pwa/demo-university/auth/register')
    cy.get('#onetrust-accept-btn-handler').click()
})

let user;

describe('Registration page where user fills in details and able to send the first message to the mentor', () => {
    before(function () {
        cy.task("registerNewUser").then((object) => {
            user = object;
        })
    })
    it('should fill registration form', () => {

        //First part of the registration form    
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
        //Second part of registration form
        cy.get('[id="content"] > h1')
            .should('contain', user.firstName)
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
        // Possible bug? for some reason below does not come up all the time (manually and automated verified) so had to use'[data-test-id="label-marketing"]') to proceed
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
        // cy.get('[data-test-id="chat-body-scroll"] > div > ul')
        //     .find('li').as('userInputtedText')
        // cy.get('@userInputtedText')
        //     .should('eq', user.chatSentence);
    })

})
