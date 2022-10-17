it ('login test', function() {

    cy.visit('https://sandbox.linkage-tech.com/#/login')
    
    cy.get(':nth-child(1) > .vs-con-input > .vs-inputx').type('varunsrinivasan72708@gmail.com')
    cy.get(':nth-child(3) > .vs-con-input > .vs-inputx').type('f8866d4f')
    cy.get('.vs-button').click()
    cy.get('.cursor-pointer > .feather > [y1="12"]', {timeout: 10000}).should('be.visible').click()
    cy.get(':nth-child(53) > a > .truncate').click()
    cy.get(':nth-child(3) > :nth-child(2) > .text-sm').click({force:true})
    cy.wait(10000)
    cy.get('#div-with-loading > div.vx-card__collapsible-content.vs-con-loading__container > div > div.inline-flex.justify-end.w-full.mt-3.p-3 > button > span.vs-button-text.vs-button--text').click({force:true})
    cy.get('body > div.vs-component.con-vs-dialog.vs-dialog-success > div.vs-dialog > footer > button.vs-component.vs-button.vs-dialog-accept-button.vs-button-success.vs-button-filled > span.vs-button-text.vs-button--text').click({force:true})
    
})
 