const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    specPattern: 'cypress/integration/**/*.cy.js',

    pageLoadTimeout:60000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
