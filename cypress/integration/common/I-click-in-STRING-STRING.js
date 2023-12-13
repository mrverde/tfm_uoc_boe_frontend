import { And } from "cypress-cucumber-preprocessor/steps";

And(`I click in {string} {string}`, (element, type) => {
  if (type === "button") {
    cy.get("button").contains(element).click();
  }
});
