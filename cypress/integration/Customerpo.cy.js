it ('login test', function() {

    cy.visit('https://sandbox.linkage-tech.com/#/login')
    
    cy.get(':nth-child(1) > .vs-con-input > .vs-inputx').type('varunsrinivasan72708@gmail.com')
    cy.get(':nth-child(3) > .vs-con-input > .vs-inputx').type('f8866d4f')
    cy.get('.vs-button').click()
    cy.get('.cursor-pointer > .feather > [y1="12"]', {timeout: 10000}).should('be.visible').click()
    cy.get(':nth-child(23) > a > .truncate').click()
    cy.get(':nth-child(1) > :nth-child(2) > .text-sm > span').click()
    cy.get('#account-manage-buttons > .vs-button-success > .vs-button-text').click()
    cy.wait(10000)
    cy.get('.fullscreen > .vs-popup > .vs-popup--header > .vs-icon').click()

    cy.get(':nth-child(2) > .text-sm > span').click()
    cy.get(':nth-child(6) > .vs-component > .vs-button-text').click()
    cy.get('.vs-dialog-accept-button > .vs-button-text').click()
    cy.go(-2)

})
