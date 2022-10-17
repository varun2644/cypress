it ('login test', function() {

    cy.visit('https://sandbox.linkage-tech.com/#/login')
    
    cy.get(':nth-child(1) > .vs-con-input > .vs-inputx').type('varunsrinivasan72708@gmail.com')
    cy.get(':nth-child(3) > .vs-con-input > .vs-inputx').type('f8866d4f')
    cy.get('.vs-button').click()
    cy.get('.cursor-pointer > .feather > [y1="12"]', {timeout: 10000}).should('be.visible').click()
    cy.get(':nth-child(43) > a > .truncate').click()
    cy.get('[data-text="Supplier"] > .vs-select--item').click({force:true})
    cy.get('[data-text="Customer"] > .vs-select--item > span').click({force:true})
    cy.get('[data-text="Example supplier"] > .vs-select--item > span').click({force:true})
    cy.get('.vs-textarea').type('1234')
    
})
