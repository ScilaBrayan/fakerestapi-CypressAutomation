/// <reference types="cypress"/>

function deleteBooks(ID) {
    return cy.request({
        method: 'DELETE',
        url: `Books/${ID}`,
        failOnStatusCode: false,
    }).as('deleteBook')
}

export{
    deleteBooks
}
