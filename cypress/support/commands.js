/// <reference types="cypress" />

Cypress.Commands.add("Login", (email, password) => {
  cy.get("#email").type(email);
  cy.get("#password").type(password);
  cy.get("#login").click();

  cy.location().should((loc) => {
    expect(loc.pathname).to.eq("/login");
  });

  cy.get(".css-1nvbq2d").should("be.visible");
});

Cypress.Commands.add("MsgLoginFalho", (email, password) => {
  cy.get(".MuiPaper-root").should("be.visible");
  cy.get(".MuiPaper-root").should("have.text", "E");
});
