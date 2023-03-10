import {homePage} from "../../support/pages/homePage.js";

/// <reference types="cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.navigateToPage(homePage)
    // cy.xpath("//a[contains(@href, 'contact')]").click().then(($el) => {
    //   cy.log("Clicked on link using text: " + $el.text())
    // })
    cy.xpath(homePage.locator.footer.contactUs).click()
    cy.get('#ContactUsFrm_first_name').type("Joe")
    cy.get('#ContactUsFrm_email').type("joe@gmail.com")
    cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
    cy.get('#ContactUsFrm_enquiry').type("Test test")
    cy.get("button[title='Submit']").click()
    cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
  });
})
