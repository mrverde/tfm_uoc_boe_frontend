import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I count {int} {string} {string}`, (count, element, type) => {
  if (type === "icon") {
    cy.get(`[data-testid=${element}Icon]`).should("have.length", count);
  }
});
