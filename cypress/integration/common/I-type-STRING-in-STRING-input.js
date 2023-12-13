import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I type {string} in {string} input`, (text, label) => {
  cy.get("[data-cy=selector]")
    .contains("label", label)
    .siblings("div")
    .find("input", { delay: 0 })
    .type(`${text}`);
});
