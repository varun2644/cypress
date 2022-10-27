it ('login test', function() {

    cy.visit('https://sandbox.linkage-tech.com/#/login')
    
    cy.get(':nth-child(1) > .vs-con-input > .vs-inputx').type('varunsrinivasan72708@gmail.com')
    cy.get(':nth-child(3) > .vs-con-input > .vs-inputx').type('f8866d4f')
    cy.get('.vs-button').click()
    cy.get('.cursor-pointer > .feather > [y1="12"]', {timeout: 10000}).should('be.visible').click()
    cy.get(':nth-child(59) > a > .truncate').click()

    cy.get('[data-text="ABC Company"] > .vs-select--item > span').click({force:true})

    cy.get('[data-text="Test Supplier 4"] > .vs-select--item > span').click({force:true})

    cy.get('.tr-values > :nth-child(1) > :nth-child(1) > .con-select > .input-select-con > .input-select').click({force:true})

    cy.get('[data-text="SHIP-11283-31-05-2022"] > .vs-select--item > span').click({force:true})



    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .con-select > .input-select-con > .input-select').click({force:true})
    //sales order| part not working

    cy.get(':nth-child(3) > .vs-col > :nth-child(1) > .vs-component > .vs-textarea').type('abcdef')
    cy.get(':nth-child(4) > .vs-col > :nth-child(1) > .vs-component > .vs-textarea').type('abcdef')

    cy.get('.vx-card__body > .justify-end > .vs-component > .vs-button-text').click({force:true})

     cy.get('.vs-dialog-accept-button > .vs-button-text').click({force:true})
        


    
})  


 
     