/// <reference types="cypress"/> 
 
it ('google test', function() {

    cy.visit('https://google.com')
    cy.get('.gLFyf').type('Hi varun Srinivasan{enter}')
    cy.contains('Videos').click()
    
    //cy.get('[data-hveid="CA8QAA"] > .g > :nth-child(1) > [jscontroller="SC7lYd"] > .kvH3mc > .jGGQ5e > .yuRUbf > a > .LC20lb').click()
    }) 
    it.only('login test',function()
    {
    
        cy.visit('https://sandbox.linkage-tech.com/#/login')
        
        cy.get(':nth-child(1) > .vs-con-input > .vs-inputx').type('varunsrinivasan72708@gmail.com')
        cy.get(':nth-child(3) > .vs-con-input > .vs-inputx').type('f8866d4f')
        cy.get('.vs-button').click()
        cy.get('.cursor-pointer > .feather > [y1="12"]', {timeout: 10000}).should('be.visible').click()
    
        cy.get(':nth-child(3) > a > .truncate').click()

        

        cy.get(':nth-child(1) > .inline-flex > .vs-component > .vs-con-input > .vs-inputx').type('12345678')
        cy.get(':nth-child(2) > .inline-flex > .vs-component > .vs-con-input > .vs-inputx').type('12345678')
        cy.get(':nth-child(3) > .inline-flex > .vs-component > .vs-con-input > .vs-inputx').type('PCB MANUFACTURING')
    
    
        cy.get(':nth-child(2) > :nth-child(1) > .vs-component > .vs-con-input > .vs-inputx').type('100')
        cy.get('#table > :nth-child(2) > :nth-child(2) > .vs-component > .vs-con-input > .vs-inputx').type('10')
        cy.get(':nth-child(2) > :nth-child(3) > .vs-component > .vs-con-input > .vs-inputx').type('$5.50')
    
        cy.get(':nth-child(3) > :nth-child(1) > .vs-component > .vs-con-input > .vs-inputx').type('50')
        cy.get('#table > :nth-child(3) > :nth-child(2) > .vs-component > .vs-con-input > .vs-inputx').type('5')
        cy.get(':nth-child(3) > :nth-child(3) > .vs-component > .vs-con-input > .vs-inputx').type('$6.50')
    
    
        cy.get(':nth-child(4) > :nth-child(1) > .vs-component > .vs-con-input > .vs-inputx').type('75')
        cy.get(':nth-child(4) > :nth-child(2) > .vs-component > .vs-con-input > .vs-inputx').type('15')
        cy.get(':nth-child(4) > :nth-child(3) > .vs-component > .vs-con-input > .vs-inputx').type('$5')
    
    
        cy.get(':nth-child(1) > .vs-component > .vs-checkbox--input').click()
    
        cy.get('.inline-flex > .con-select > .input-select-con > .input-select').click()

        cy.get('[data-text="Yes"] > .vs-select--item').click()
    
        cy.get('.vs-con-textarea > .flex-grow').type('No Remarks')
    
        cy.get('.flex.items-center > .vs-component > .vs-checkbox--input').click()
    
        cy.get(':nth-child(7) > .vs-button-success > .vs-button-text').click()
    
        cy.get('.vs-dialog-accept-button > .vs-button-text').click()
    
    })
    