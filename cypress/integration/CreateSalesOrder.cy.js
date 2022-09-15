it ('login test', function() {

    cy.visit('https://sandbox.linkage-tech.com/#/login')
    
    cy.get(':nth-child(1) > .vs-con-input > .vs-inputx').type('varunsrinivasan72708@gmail.com')
    cy.get(':nth-child(3) > .vs-con-input > .vs-inputx').type('f8866d4f')
    cy.get('.vs-button').click()
    cy.get('.cursor-pointer > .feather > [y1="12"]', {timeout: 10000}).should('be.visible').click()

    cy.get(':nth-child(22) > a > .truncate').click()

    cy.get('.vx-input-group-default > .con-select > .input-select-con > .input-select').pause()
    cy.get('.vs-inputx').type('abcdefg')
    cy.get(':nth-child(2) > .inline-flex > .vs-con-textarea > .flex-grow').type('abcdefgh')
    cy.get(':nth-child(3) > .inline-flex > .vs-con-textarea > .flex-grow').type('dfsdsad')

})
