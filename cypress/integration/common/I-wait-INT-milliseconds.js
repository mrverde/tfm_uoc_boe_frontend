const { Then } = require("cypress-cucumber-preprocessor/steps");

Then("I wait {int} milliseconds", milliseconds => {
  cy.clock();
  cy.tick(milliseconds);
});
