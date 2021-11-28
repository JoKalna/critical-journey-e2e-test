# What is it?

This is a cypress end to end critical user journey test for Unibuddy customers written in [cypress.io](https://www.cypress.io/) 

# Run Tests locally
## 1. Install Dependencies

Below command will install all the dependencies for the project.
This should include downloading cypress as a dependency so you don't need to download it seperatly. 

``npm install``

## 2. Run Tests
Below command will open cypress test runner and run all existing tests in the project.

``npm run cy:open``

To run cypress in headless mode:

```npm run cy:headless```

### 3. Plug-ins
Using plug in called faker to help me generate random data for the registration form 
https://www.npmjs.com/package/faker
https://www.tabnine.com/code/javascript/functions/faker/country 