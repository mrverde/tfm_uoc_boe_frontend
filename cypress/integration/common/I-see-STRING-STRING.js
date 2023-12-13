import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I see {string} {string}`, (element, type) => {
  if (type === "text") {
    cy.get("body").contains(element);
  } else if (type === "button") {
    cy.get("button").contains(element);
  } else if (type === "table") {
    cy.get("[data-cy=table]").contains(element);
  } else if (type === "selector") {
    cy.get("[data-cy=selector] label").contains(element);
  } else if (type === "icon") {
    cy.get(`[data-testid=${element}Icon]`);
  } else if (type === "chip") {
    cy.get(".MuiChip-label").contains(element)
  }
});
