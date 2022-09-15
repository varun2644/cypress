import {LoginPage} from "./pages/loginpages"

const loginPage =new LoginPage

it ('login test', () => {

    loginPage.navigate();
    loginPage.enterUsername();
    loginPage.enterPassword();
    loginPage.clickLogin();

    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#uname').type('test')
    cy.get('#pwd').type('test')
    cy.get('[type="submit"]').click()
    cy.wait(1000)
    cy.get('h4 > a').click()
    cy.get('#fname').type('varun')
    cy.wait(1000)
    cy.get('#lname').type('srinivasan')
    cy.wait(1000)
    cy.get('#male').click()
    cy.wait(1000)
    cy.get('[name="option1"]').click()
    cy.wait(1000)
    cy.get('[name="option2"]').click()
    cy.wait(1000)
    cy.get('[name="option3"]').click()
    cy.wait(1000)
    cy.get('textarea').type('Hi this is varun srinivasan i work at Exinous JP Nagar')
    
    
})
