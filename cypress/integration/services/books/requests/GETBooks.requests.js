/// <reference types="cypress"/>

function allBooks() {
    return cy.request({
        method: 'GET',
        url: 'Books',
        failOnStatusCode: false,
    }).as('getAllBooks')
}

function idBook(ID) {
    return cy.request({
        method: 'GET',
        url: `Books/${ID}`,
        failOnStatusCode: false,
    }).as('getBookID')
}

export{
    allBooks,
    idBook
}