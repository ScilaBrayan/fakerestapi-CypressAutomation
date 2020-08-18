/// <reference types="cypress"/>
const payloadUpdateBook = require('../../fixtures/update-book.json')

function updateBooks(ID) {
    return cy.request({
        method: 'PUT',
        url: `Books/${ID}`,
        headers:{
            'Content-Type': 'application/json',
            'Accept':' application/json' 
        },
        failOnStatusCode: false,
        body: payloadUpdateBook,
    })
}

export{
    updateBooks
}
