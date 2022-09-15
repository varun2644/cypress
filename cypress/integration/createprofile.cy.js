it ('login test', function() {

    cy.visit('https://sandbox.linkage-tech.com/#/login')
    
    cy.get(':nth-child(1) > .vs-con-input > .vs-inputx').type('varunsrinivasan72708@gmail.com')
    cy.get(':nth-child(3) > .vs-con-input > .vs-inputx').type('f8866d4f')
    cy.get('.vs-button').click()
    cy.get('.cursor-pointer > .feather > [y1="12"]', {timeout: 10000}).should('be.visible').click()
    cy.get(':nth-child(19) > a > .truncate').click()

    cy.get('.input-select').pause()

    cy.get(':nth-child(1) > :nth-child(1) > .quill-editor > .ql-container > .ql-editor > p').type('Process')
    cy.get(':nth-child(2) > :nth-child(1) > .quill-editor > .ql-container > .ql-editor > p').type('Cam')
    cy.get(':nth-child(3) > :nth-child(1) > .quill-editor > .ql-container > .ql-editor > p').type('quality')
    cy.get(':nth-child(4) > :nth-child(1) > .quill-editor > .ql-container > .ql-editor > p').type('Shipping')
    cy.get(':nth-child(5) > :nth-child(1) > .quill-editor > .ql-container > .ql-editor').type('Misc')  
    
    cy.get('.header-table > .flex > .vs-component > .vs-button-text').click()

    cy.get(':nth-child(6) > .vs-button-success > .vs-button-text').click()


})