/* global cy */

describe("slideInteraction", () => {
  it("user can view slides associated with respective book", () => {
    cy.visit("http://localhost:3000/");

    //Run tests for Inferno book
    cy.get("#book-selector").click();
    cy.findAllByRole("option", { name: /inferno/i }).click();
    cy.findAllByRole("radio").click({
      multiple: true,
    });
    //Verify correct BG color for imageWrapper
    cy.get(
      "#root > div > div > div > div:nth-child(2) > div > div:nth-child(2)"
    )
      .invoke("css", "background-color")
      .should("equal", "rgb(255, 214, 214)");

    //Run tests for Purgatorio book
    cy.get("#book-selector").click();
    cy.findAllByRole("option", { name: /purgatorio/i }).click();
    cy.findAllByRole("radio").click({
      multiple: true,
    });
    //Verify correct BG color for imageWrapper
    cy.get(
      "#root > div > div > div > div:nth-child(2) > div > div:nth-child(2)"
    )
      .invoke("css", "background-color")
      .should("equal", "rgb(200, 255, 187)");

    //Run tests for Paradiso book
    cy.get("#book-selector").click();
    cy.findAllByRole("option", { name: /paradiso/i }).click();
    cy.findAllByRole("radio").click({
      multiple: true,
    });
    //Verify correct BG color for imageWrapper
    cy.get(
      "#root > div > div > div > div:nth-child(2) > div > div:nth-child(2)"
    )
      .invoke("css", "background-color")
      .should("equal", "rgb(228, 224, 255)");
  });
});
