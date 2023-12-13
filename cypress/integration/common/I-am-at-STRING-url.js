const { And } = require("cypress-cucumber-preprocessor/steps");

And("I am at {string} url", url => {
  cy.url().should("contain", url);
});
