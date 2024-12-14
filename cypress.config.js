const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity:false,
  e2e: {
   baseUrl: 'https://www.saucedemo.com',
   pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
});
