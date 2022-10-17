it ('login test', function() {

    cy.visit('https://sandbox.linkage-tech.com/#/login')
    
    cy.get(':nth-child(1) > .vs-con-input > .vs-inputx').type('varunsrinivasan72708@gmail.com')
    cy.get(':nth-child(3) > .vs-con-input > .vs-inputx').type('f8866d4f')
    cy.get('.vs-button').click()
    cy.get('.cursor-pointer > .feather > [y1="12"]', {timeout: 10000}).should('be.visible').click()
    cy.get(':nth-child(55) > a > .truncate').click()
    cy.get(':nth-child(2) > :nth-child(2) > .text-sm > span').click({force:true})

    cy.get('[data-text="NET 30"] > .vs-select--item > span').click({force:true})
    cy.get('[data-text="format1A"] > .vs-select--item > span').click({force:true})

    cy.get(':nth-child(7) > .w-full > .mx-input-wrapper > .mx-input').click({force:true})
    cy.get('[data-row-col="3,4"] > div').click({force:true})
    cy.get(':nth-child(2) > :nth-child(1) > .con-select > .input-select-con > .input-select').click({force:true})
    cy.get('[style="left: 129.672px; top: 558.969px; width: 125px;"] > :nth-child(1) > :nth-child(1) > .vs-select--item > span').click({force:true})
  
    cy.get('.ml-3 > .vs-button-text').click({force:true})
    cy.get('.vs-dialog-accept-button > .vs-button-text').click({force:true})
  
    
})
 