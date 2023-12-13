import { And } from "cypress-cucumber-preprocessor/steps";

And(`I click in the {string} {string} {int}`, (element, type, number) => {
  const n = (number -= 1);
  if (type === "icon") {
    cy.get(`[data-testid=${element}Icon]`)
      .eq(n)
      .parent("a")
      .invoke("removeAttr", "target")
      .click();
  }
});
