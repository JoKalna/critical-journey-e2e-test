// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
// This is a great place to put global configuration and
// behavior that modifies Cypress.
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.SelectorPlayground.defaults({
    selectorPriority: [
        'data-test',
        'id',
        'class',
        'tag',
        'attributes',
        'nth-child',
    ],
});

