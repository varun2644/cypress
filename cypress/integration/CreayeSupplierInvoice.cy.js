it ('login test', function() {

    cy.visit('https://sandbox.linkage-tech.com/#/login')
    
    cy.get(':nth-child(1) > .vs-con-input > .vs-inputx').type('varunsrinivasan72708@gmail.com')
    cy.get(':nth-child(3) > .vs-con-input > .vs-inputx').type('f8866d4f')
    cy.get('.vs-button').click()
    cy.get('.cursor-pointer > .feather > [y1="12"]', {timeout: 10000}).should('be.visible').click()
    cy.get(':nth-child(52) > a > .truncate').click()
    cy.get('[data-text="Test Supplier 4"] > .vs-select--item > span').click({force:true})
    cy.get(':nth-child(2) > .vs-component > .vs-con-input > .vs-inputx').type('12345678')
    cy.get(':nth-child(3) > .w-full > .mx-input-wrapper > .mx-input').click()
    cy.get(':nth-child(3) > .w-full > .mx-input-wrapper > .mx-icon-calendar > svg').click({force:true})

    cy.get('[data-text="NET 45"] > .vs-select--item > span').click({force:true})
    cy.get(':nth-child(5) > .w-full > .mx-input-wrapper > .mx-input').click({force:true})
    cy.get(':nth-child(5) > .w-full > .mx-input-wrapper > .mx-icon-calendar > svg').click({force:true})
    


    cy.get('[data-text="SPO12544"] > .vs-select--item > span').click({force:true})  

    cy.get('[style="min-width: 10rem;"] > :nth-child(1) > .con-select > .input-select-con > .input-select').click()
    cy.get('[data-text="Part"] > .vs-select--item > span').click({force:true})
    cy.get(':nth-child(2) > [style="width: 20rem;"] > :nth-child(1) > .con-select > .input-select-con > .input-select').click({force:true})
    
})
 