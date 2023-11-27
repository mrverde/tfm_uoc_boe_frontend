import { Given } from "cypress-cucumber-preprocessor/steps";

Given(`I open the app`, () => {
  const baseUrl = Cypress.config("baseUrl");
  cy.visit(baseUrl);
});
