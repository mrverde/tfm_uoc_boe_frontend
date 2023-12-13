import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I don't see {string} {string}`, (element, type) => {
  if (type === "text") {
    cy.get("body").contains(element).should("not.exist");
  } else if (type === "button") {
    cy.get("button").contains(element).should("not.exist");
  }
});
