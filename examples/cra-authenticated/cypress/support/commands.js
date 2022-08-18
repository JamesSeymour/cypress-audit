import "@jamesseymour/lighthouse/commands";
import "@jamesseymour/pa11y/commands";

Cypress.Commands.add("login", () => {
  window.localStorage.setItem("username", "mfrachet");
  cy.visit("/dashboard");
});
