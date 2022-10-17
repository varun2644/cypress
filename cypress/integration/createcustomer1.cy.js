/// <reference types="cypress"/> 
 
it ('login test', function() {

    cy.visit('https://sandbox.linkage-tech.com/#/login')
    
    cy.get(':nth-child(1) > .vs-con-input > .vs-inputx').type('varunsrinivasan72708@gmail.com')
    cy.get(':nth-child(3) > .vs-con-input > .vs-inputx').type('f8866d4f')
    cy.get('.vs-button').click()
    cy.get('.cursor-pointer > .feather > [y1="12"]', {timeout: 10000}).should('be.visible').click()

    cy.get(':nth-child(3) > a > .truncate').click()

    // cy.contains("Create Customer", {timeout: 10000}).click()

    cy.get('.items-baseline > :nth-child(2) > .vs-component').click()

   // cy.get('input-select vs-select--input').select('Test').should('have.value','Test')

   cy.get(':nth-child(1) > .con-select > .input-select-con > .input-select').pause()

     cy.get(':nth-child(2) > form > .vs-row > :nth-child(1) > .inline-flex > .vs-component > .vs-con-input > .vs-inputx').pause()
     cy.get('[data-text="Test"] > .vs-select--item > span').click({force:true})
     cy.get('[data-text="AMS 45 days"] > .vs-select--item > span').click({force:true})
     cy.get(':nth-child(2) > .inline-flex > .vs-component > .vs-con-input > .vs-inputx').type('srinivasan')
     cy.get(':nth-child(3) > .inline-flex > .vs-component > .vs-con-input > .vs-inputx').type('ABC Company')
     cy.get(':nth-child(4) > .vs-component > .vs-con-input > .vs-inputx').type('Abc1@gmail.com')
     cy.get(':nth-child(5) > .inline-flex > .vs-component > .vs-con-input > .vs-inputx').type('123456789')   
     cy.get(':nth-child(6) > .inline-flex > .vs-component > .vs-con-input > .vs-inputx').type('56789')
     cy.get('[data-text="Sales Rep Introduction"] > .vs-select--item > span').click({force:true})

     
     cy.get('.header-table > .vs-component').click()

     cy.get(':nth-child(1) > .inline-flex > .con-select > .input-select-con > .input-select').pause()
     cy.get('[data-text="Billing Address"] > .vs-select--item > span').click({force:true})
     cy.get('[data-v-07b01a9f=""] > :nth-child(1) > .vs-row > :nth-child(2) > .inline-flex > .vs-component > .vs-con-input > .vs-inputx').type('#2644/A 2nd main road vv mohalla mysore')
     cy.get('[data-v-07b01a9f=""] > :nth-child(1) > .vs-row > :nth-child(3) > .inline-flex > .vs-component > .vs-con-input > .vs-inputx').type('#2644/A 2nd main road vv mohalla mysore')
     cy.get(':nth-child(4) > .inline-flex > .vs-component > .vs-con-input > .vs-inputx').type('570002')
     cy.get('#vs2__combobox > .vs__actions > .vs__open-indicator > .feather').pause()

     cy.get('#vs2__option-100').click({force:true})
     cy.get('#vs3__option-16').click({force:true})
     cy.get('#vs4__option-10').click({force:true})
     


        
     cy.get('.vs-popup--content > :nth-child(1) > .flex > .vs-button-success > .vs-button-text').click()
     cy.scrollTo('top')

}) 


