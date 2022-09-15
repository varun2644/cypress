const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'po1omg',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },specPattern :"cypress/{e2e,integration}/**/*.cy.{js,jsx,ts,tsx}",
    
  },

  component: {
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },
});
