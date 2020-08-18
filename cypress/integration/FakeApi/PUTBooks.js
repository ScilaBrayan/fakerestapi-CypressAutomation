/// <reference types="cypress"/>
import * as PUTBooks from '../../integration/services/books/requests/PUTBooks.requests'
import * as GETBooks from '../../integration/services/books/requests/GETBooks.requests'

const payloadUpdateBook = require('../../fixtures/update-book.json')

let idBook = ''; 

When(/^atualizo o nome do livro$/, () => {
    cy.get('@getAllBooks').then((busca) => {
        PUTBooks.updateBooks(busca.body[0].ID).should((updateBook) =>{
            idBook = busca.body[0].ID
            expect(updateBook.status).to.eq(200)
            cy.log(busca.body[0].Title)
            cy.log(busca.body[0].ID)
        })
    })
});


Then(/^o titulo do livro foi atualizado$/, () => {
    cy.log(idBook)
	GETBooks.idBook(idBook).should((response) =>{
        expect(response.Title).to.eq(payloadUpdateBook.Title)
    })
});



