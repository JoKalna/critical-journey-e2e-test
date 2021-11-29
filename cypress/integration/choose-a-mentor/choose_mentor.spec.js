beforeEach(() => {
    // beforeEach function used so that it runs before each test
    cy.visit('https://unibuddy.co/pwa/demo-university')
    cy.get('#onetrust-accept-btn-handler').click()
})

describe('Student choosing a mentor to chat with by selecting appropriate filters', () => {
    // check if grid has at least one student visibile for the selected option
    function verifyGrid() {
        cy.get('#mentors-container > div._91w._3b9F > div')
            .should('have.length.greaterThan', 1);
    }

    it('should select Area of Study, Levels and Country', () => {
        // select Area Of Study
        cy.get('#mentor-filter-degree > div > div.css-1hwfws3')
            .click()
        cy.get('#react-select-2-option-5')
            .click()
        // verify if selected Area of Study is displayed as label                                       
        cy.get('#remove-label')
            .should('exist');
        verifyGrid();
        // select Degree Level  
        cy.get('#mentor-filter-degree_level > .css-1ns25le > .css-1hwfws3')
            .click()
        cy.get('#react-select-3-option-0')
            .click()
        cy.get('._UcR > :nth-child(2)')
            .should('exist');
        verifyGrid()
        // select Country    
        cy.get('#mentor-filter-country > .css-1ns25le > .css-1hwfws3')
            .click()
        cy.get('#react-select-4-option-0')
            .click()
        cy.get('._UcR > :nth-child(3)')
            .should('exist');
        verifyGrid()
        cy.get(':nth-child(1) > ._1Tj0')
        // verify and click on chat button
        cy.get(':nth-child(1) > ._2qHr > ._1lC1')
            .should('contain', 'Chat with')
            .click()

    })
})
