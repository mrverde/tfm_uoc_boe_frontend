import { And } from "cypress-cucumber-preprocessor/steps";

And(`I click in the {string} {int}`, (type, number) => {
  const n = (number -= 1);
  if (type === "detail panel") {
    cy.get('button[aria-label="Detail panel visibility toggle"]').eq(n).click();
  }
});
