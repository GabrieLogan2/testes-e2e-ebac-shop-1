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


Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});


Cypress.Commands.add('Endereço', (Nome, Sobrenome, Endereço, Casa, Cidade, Estado, Cep, Telefone, Email, senha) => {
    cy.get('#billing_first_name').type(Nome)
    cy.get('#billing_last_name').type(Sobrenome)
    cy.get('#billing_address_1').type(Endereço)
    cy.get('#billing_address_2').type(Casa)
    cy.get('#billing_city').type(Cidade)
    cy.get('#select2-billing_state-container').type(Estado + '{enter}')
   cy.get('#billing_postcode').type(Cep)
   cy.get('#billing_phone').type(Telefone)
   cy.get('#billing_email').type(Email)
   cy.get('#createaccount').check()
   cy.get('#account_password').type(senha)
   cy.get('#terms').check()
   cy.get('#place_order').click() 
})

