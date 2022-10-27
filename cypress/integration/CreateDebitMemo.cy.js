it ('login test', function() {

    cy.visit('https://sandbox.linkage-tech.com/#/login')
    
    cy.get(':nth-child(1) > .vs-con-input > .vs-inputx').type('varunsrinivasan72708@gmail.com')
    cy.get(':nth-child(3) > .vs-con-input > .vs-inputx').type('f8866d4f')
    cy.get('.vs-button').click()
    cy.get('.cursor-pointer > .feather > [y1="12"]', {timeout: 10000}).should('be.visible').click()
    cy.get(':nth-child(76) > a > .truncate').click({force:true})

    cy.get('[data-text="Test Supplier 4"] > .vs-select--item > span').click({force:true})

    cy.get('[data-text="S10027-123568888"] > .vs-select--item > span').click({force:true})
    cy.get(':nth-child(4) > .vs-component > .vs-con-input > .vs-inputx').type('23')
    cy.get('.ml-3 > .vs-button-text').click({force:true})

    cy.get('.vs-dialog-accept-button > .vs-button-text').click({force:true})


    
 
     


 
     
}) 
       