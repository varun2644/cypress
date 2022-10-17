it ('login test', function() {

    cy.visit('https://sandbox.linkage-tech.com/#/login')
    
    cy.get(':nth-child(1) > .vs-con-input > .vs-inputx').type('varunsrinivasan72708@gmail.com')
    cy.get(':nth-child(3) > .vs-con-input > .vs-inputx').type('f8866d4f')
    cy.get('.vs-button').click()
    cy.get('.cursor-pointer > .feather > [y1="12"]', {timeout: 10000}).should('be.visible').click()
    cy.get(':nth-child(36) > a > .truncate').click()

    cy.get('[data-text="ABC Company"] > .vs-select--item > span').click({force:true})
    cy.get('[data-text="C10664-123-122"] > .vs-select--item > span').click({force:true})
    cy.get('[data-text="Test Supplier 4"] > .vs-select--item > span').click({force:true})
    cy.get('[data-text="SPO12549"] > .vs-select--item > span').click({force:true})
    
    cy.get(':nth-child(2) > :nth-child(3) > :nth-child(1) > .vs-component > .vs-con-input > .vs-inputx').type('120')
    cy.get('[style="left: 762.438px; top: 506.641px; width: 152px;"] > :nth-child(1) > [data-text="Accept"] > .vs-select--item > span').click({force:true})

    cy.get(':nth-child(4) > :nth-child(3) > :nth-child(1) > .vs-component > .vs-con-input > .vs-inputx').type('0')
    cy.get(':nth-child(4) > :nth-child(3) > :nth-child(1) > .vs-component > .vs-con-input > .vs-inputx').type('0')


    cy.get(':nth-child(7) > :nth-child(3) > :nth-child(1) > .vs-component > .vs-con-input > .vs-inputx').type('1')
    cy.get(':nth-child(8) > :nth-child(3) > :nth-child(1) > .vs-component > .vs-con-input > .vs-inputx').type('1')
    cy.get(':nth-child(9) > :nth-child(3) > :nth-child(1) > .vs-component > .vs-con-input > .vs-inputx').type('1')
    cy.get(':nth-child(10) > :nth-child(3) > :nth-child(1) > .vs-component > .vs-con-input > .vs-inputx').type('1')


    cy.get(':nth-child(12) > :nth-child(3) > :nth-child(1) > .vs-component > .vs-con-input > .vs-inputx').type('0')


    cy.get(':nth-child(22) > :nth-child(3) > :nth-child(1) > .vs-component > .vs-con-input > .vs-inputx').type('10')

    cy.get(':nth-child(24) > :nth-child(3) > :nth-child(1) > .vs-component > .vs-con-input > .vs-inputx').type('1')
    cy.get(':nth-child(25) > :nth-child(3) > :nth-child(1) > .vs-component > .vs-con-input > .vs-inputx').type('1')
    cy.get(':nth-child(26) > :nth-child(3) > :nth-child(1) > .vs-component > .vs-con-input > .vs-inputx').type('5')


})
