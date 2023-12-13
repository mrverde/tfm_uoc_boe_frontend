const { Then } = require("cypress-cucumber-preprocessor/steps");

Then("I see the following cells on table {string}", (table, dataTable) => {
  const [headers, ...rawRows] = dataTable.rawTable;

  rawRows.forEach(o => expect(o).to.have.lengthOf(headers.length));

  const products = rawRows.map(o => {
    let out = {};
    o.forEach((field, index) => {
      out[headers[index]] = field;
    });
    return out;
  });

  const htmlTableHeaders = [];

  const tableName = table ? `=${table}` : ``;

  cy.get(
    `div[data-testid${tableName}] table > thead > tr > th span[data-testid=mtableheader-sortlabel]`
  ).then(cells => {
    htmlTableHeaders.push(
      ...[...cells].map(r => ({
        name: r.innerText
      }))
    );

    expect(headers).to.be.an("array");

    headers.forEach(header => {
      expect(htmlTableHeaders.map(h => h.name)).to.include(header);
    });
  });

  cy.get("table > tbody > tr[data-testid]").then(trs => {
    const tableRows = [...trs].map(row => {
      const out = {};
      const cells = row.querySelectorAll(`td[data-testid]`);
      htmlTableHeaders.forEach((header, idxHeader) => {
        out[header.name] = cells[idxHeader].innerText;
      });
      return out;
    });

    [...products].forEach((product, idx) => {
      const foundRow = tableRows[idx];
      const fields = Object.keys(product);

      fields.forEach(f => expect(foundRow[f]).to.equal(product[f]));
    });
  });
});
