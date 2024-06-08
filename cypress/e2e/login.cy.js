//before - antes de todos os testes
//beforeEach - antes de cada teste
//after - depois de todos os testes
//afterEach - depois de cada teste

beforeEach(() => {
  cy.visit("https://automacao.qacoders-academy.com.br/login");
});

describe("Login", () => {
  it("Login com sucesso", () => {
    cy.get("#email").type("sysadmin@qacoders.com");
    cy.get("#password").type("1234@Test");
    cy.get("#login").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/login");
    });

    cy.get(".css-1nvbq2d").should("be.visible");
  });

  it("Login com e-mail válido e a senha inválida", () => {
    cy.get("#email").type("sysadmin@qacoders.com");
    cy.get("#password").type("1234@");
    cy.get("#login").click();

    cy.get(".MuiPaper-root").should("be.visible");
    cy.get(".MuiPaper-root").should("have.text", "E");
    //E-mail ou senha informados são inválidos.
  });

  it("Login com e-mail válido e a senha inválida", () => {
    cy.get("#email").type("sysadm@qacoders.com");
    cy.get("#password").type("1234@Test");
    cy.get("#login").click();

    cy.get(".MuiPaper-root").should("be.visible");
    cy.get(".MuiPaper-root").should("have.text", "E");
    //E-mail ou senha informados são inválidos.
  });
});
