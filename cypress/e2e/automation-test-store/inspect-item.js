describe("Inspect Automation Test Store items using chain of commands", () => {
  it("Click on the first item using item text", () => {
    cy.visit("https://automationteststore.com/");
    cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
  });
  it("Click on the first item using item index", () => {
    cy.visit("https://automationteststore.com/");
    cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
  });
})
