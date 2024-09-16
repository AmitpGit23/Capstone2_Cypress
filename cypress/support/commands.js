// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//import { addSnapshotCommand } from 'cypress-image-snapshot/command';

//addSnapshotCommand();

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () =>{
    cy.visit('https://automationteststore.com/index.php?rt=account/login')

    cy.get("input[id='loginFrm_loginname']").type('Amitparate')

    cy.get("input[id='loginFrm_password']").type('Amitp@123')

    cy.get("button[title='Login']").click()
})