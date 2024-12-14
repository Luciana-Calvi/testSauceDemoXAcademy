/// <reference types="cypress" /> 

Cypress.Commands.add('escribir', (selector, dato) => {  
    cy.get(selector).type(dato)
})

 Cypress.Commands.add('mi_click', (selector) => {
    cy.get(selector).click()
 })

 Cypress.Commands.add('asersion', (selector,texto) => {
    cy.get(selector).contains(texto)
 });