const { Given } = require("cypress-cucumber-preprocessor/steps");

Given("backend {string} as {string} returns {string}", (url, alias, fixture) => {
    const parsedUrl = url.charAt(0) === "/" ? url.substring(1) : url;
    cy.intercept(
      { method: "GET", url: `**/api/v1/${parsedUrl}*` },
      { fixture }
    ).as(alias);
  }
);
