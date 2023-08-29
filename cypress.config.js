const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  video: false,

  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "http://localhost:3000"
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite"
    }
  }
});
