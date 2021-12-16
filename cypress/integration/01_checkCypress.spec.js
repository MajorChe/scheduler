describe("Check Cypress is working", () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it("Check Home page", () => {
    cy.get("h2").contains("Monday");
  });
  it("Check if home page contains Tuesday", () => {
    cy.get("h2").contains("Tuesday").click();
  });
  it("should have Tuesday and a background css", () => {
    cy.contains("li", "Tuesday")
      .click()
      .should("have.class", "day-list__item--selected");
  });
});
