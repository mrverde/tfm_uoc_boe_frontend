import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I see {string} {string}`, (element, type) => {
  if (type === "text") {
    cy.get("body").contains(element);
  } else if (type === "button") {
    cy.get("button").contains(element);
  } else if (type === "table") {
    cy.get("[data-cy=table]").contains(element)
  }
});
