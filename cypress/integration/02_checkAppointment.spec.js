describe("Should book an appointment", () => {
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");
    cy.visit("/");
    cy.get("h2").contains("Monday").click();
  });
  
  it("Should book an appointment", () => {
    cy.get(".appointment__add-button").first().click();
    cy.get("input").type("Major Che");
    cy.get(".interviewers__item").first().click();
    cy.contains("Save").click().as("appointment-saved");
    cy.contains(".appointment__card--show", "Major Che");
    cy.contains(".appointment__card--show", "Sylvia Palmer").wait(500);

    //edit the appointment

    cy.get("[alt = Edit]").first().click({ force: true });
    cy.get("input").clear().type("Major Che 2.0");
    cy.get('[alt="Tori Malcolm"]').click();
    cy.contains("Save").click();
    cy.contains(".appointment__card--show", "Major Che 2.0");
    cy.contains(".appointment__card--show", "Sylvia Palmer").wait(500);

    //delete the appointment

    cy.get("[alt = Delete]").first().click({ force: true });
    cy.get(".button--danger").contains("Confirm").click();
    cy.contains("Deleting").should("exist");
    cy.contains("Deleting").should("not.exist");

    cy.contains(".appointment__card--show", "Archie Cohen").should("not.exist");
  });
});
