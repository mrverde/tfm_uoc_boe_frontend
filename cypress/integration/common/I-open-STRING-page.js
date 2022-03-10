import { Given } from "cypress-cucumber-preprocessor/steps";

Given('I open {string} page', url => {
    cy.visit(url)
})