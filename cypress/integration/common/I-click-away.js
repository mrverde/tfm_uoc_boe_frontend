const { When } = require("cypress-cucumber-preprocessor/steps");

When("I click away", () => {
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.clock();
  cy.tick(100);
  cy.get("body").click(0, 0);
});
