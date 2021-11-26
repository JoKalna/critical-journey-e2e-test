describe('Student choosing a mentor to chat with', () => {
    beforeEach(() => {
        // beforeEach function used so that it runs before each test
    })

    it('should visit students page', () => {
        cy.visit('https://unibuddy.co/pwa/demo-university/buddies/students')
    })
    
    it('should select Area of Study', () => {

        // verify that everytime you select Area of Studythe grid updates and has at least 1 length. 
        // verify that remove-label has been updated 

    })
    it('should select Levels', () => {

        // verify that everytime you select Level, the grid updates and has at least 1 length. 
        // verify that remove-label has been updated 

    })
    it('should select country', () => {

        // verify that everytime you select country, the grid updates and has at least 1 length. 
        // verify that remove-label has been updated 

    })

    it('should have Chat with ... button is presented', () => {
       // button match 'Chat with
       // click the button
       // verify that the once the button is pressed href matches the buddy postion=1   
    })

})
