const { Then } = require("cypress-cucumber-preprocessor/steps");

Then("a GET API call with alias {string} to {string} is done with query params",  (alias, url, dataTable) => {
    let params;

    if (dataTable) {
      const [_, ...rawRows] = dataTable.rawTable;
      params = rawRows.map(el => `${el[0]}=${el[1]}`);
    }

    cy.wait(`@${alias}`)
      .its("response.url")
      .should("contains", url)
      .then(el => {
        params.forEach(queryParam => {
          expect(el).contains(queryParam);
        });
      });
  }
);
