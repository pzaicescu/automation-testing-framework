/// <reference types="cypress" />

describe("Alias and invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
    cy.get('@productThumbnail').its('length').should('be.gt', 5)
    cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
  });
  it("Validate the number of products within the Hair Care page", () => {
    cy.visit("https://automationteststore.com/");

    cy.get(".thumbnail").as('products')
    cy.get('@products').its('length').should('eq', 16)
    cy.get('@products').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
  })
  it.only("Validate the number of products within the Hair Care page", () => {
    cy.visit("https://automationteststore.com/");

    cy.get(".thumbnail").as('productsThumbnail')
    // cy.get('@productsThumbnail').find('.oneprice').each(($el)=>{
    //   cy.log($el.text())
    // })
    cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
    cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

    let itemsTotal = 0;
    cy.get('@itemPrice').then(($linkText) => {
      let itemsPriceTotal = 0;
      let itemPrice = $linkText.split('$')
      for(let i = 0 ; i < itemPrice.length; i++){
        cy.log(itemPrice[i]);
        itemsPriceTotal += Number(itemPrice[i]);
      }
      itemsTotal += itemsPriceTotal;
      cy.log('Non sale price items total: ' + itemsPriceTotal)
    })
    cy.get('@saleItemPrice').then(($linkText) => {
      let saleItemsPriceTotal = 0;
      let saleItemPrice = $linkText.split('$')
      for(let i = 0 ; i < saleItemPrice.length; i++){
        cy.log(saleItemPrice[i]);
        saleItemsPriceTotal += Number(saleItemPrice[i]);
      }
      itemsTotal += saleItemsPriceTotal;
      cy.log('Sale price items total: ' + saleItemsPriceTotal)
    })
      .then(()=> {
        cy.log("Total price of all products: " + itemsTotal)
        expect(itemsTotal).to.eq(669)
      })
  })
});

