describe("Verifying variables, cypress commands and jquery commands", () => {
  it("Validate proprieties of the Contact Us Page", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");

    // Uses cypress commands and chaining
    cy.contains('#ContactUsFrm', 'Contact Us Form').find('[for=ContactUsFrm_first_name]').should('contain', 'First')

    // JQuery Approach
    cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
      const firstNameText = text.find('#field_11').text()
      expect(firstNameText).to.contain('First name')

      //Embedded commands (Closure)
      cy.get('#field_11').then(fnText => {
        cy.log(fnText.text())
      })
    })

  });

})
