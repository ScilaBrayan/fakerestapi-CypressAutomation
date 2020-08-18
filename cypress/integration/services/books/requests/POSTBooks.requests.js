/// <reference types="cypress"/>
const payloadAddBook = require('../../../../fixtures/add-book.json')

function addBooks() {
    return cy.request({
        method: 'POST',
        url: 'Books',
        failOnStatusCode: false,
        body: payloadAddBook
    }).as('postNewBook')
}

export{
    addBooks
}