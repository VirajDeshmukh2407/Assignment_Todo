describe("Todo App", () => {
  beforeEach(() => {
    cy.visit("/"); // Adjust the path if necessary
  });

  it("should add a new todo", () => {
    cy.get("[data-cy=add-todo-input]").type("New Todo");
    cy.get("[data-cy=add-todo-button]").click();
    cy.contains("New Todo").should("be.visible");
  });

  it("should mark a todo as completed", () => {
    cy.get("[data-cy=add-todo-input]").type("Complete this todo");
    cy.get("[data-cy=add-todo-button]").click();
    cy.contains("Complete this todo")
      .parent()
      .find("[data-cy=todo-checkbox]")
      .click();
    cy.contains("Complete this todo")
      .parent()
      .should("have.class", "bg-success"); // Assuming success color
  });

  it("should delete a todo", () => {
    cy.get("[data-cy=add-todo-input]").type("Delete this todo");
    cy.get("[data-cy=add-todo-button]").click();
    cy.contains("Delete this todo")
      .parent()
      .find("[data-cy=delete-todo-button]")
      .click();
    cy.contains("Delete this todo").should("not.exist");
  });
});
