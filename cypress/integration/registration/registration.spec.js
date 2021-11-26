beforeEach(() => {
    // beforeEach function used so that it runs before each test
    cy.visit('https://unibuddy.co/pwa/demo-university/auth/register')
    cy.get('#onetrust-accept-btn-handler').click()
})

let user;

describe('Student choosing a mentor to chat with', () => {
    before(function () {
        cy.task("registerNewUser").then((object) => {
            user = object;
        })
    })
    it('should fill registration form  ', () => {
        cy.get('#first-name')
            .type(user.firstName)
        cy.get('#last-name')
            .type(user.lastName)
        cy.get('#email')
            .type(user.email)
        cy.get('#password')
            .type(user.password)
        // will use the same password as previously
        cy.get('#confirm-password')
            .type(user.password)
        cy.get('#privacy')
            .click()
        // cy.get('#continue')
        //   .click()
    })
    it.only('should display correct validation for fields', () => {
        cy.get('#continue')
            .click()
        // verify all validation names appear when clicking Start to chat

    })
})
