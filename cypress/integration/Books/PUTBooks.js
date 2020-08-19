/// <reference types="cypress"/>
import * as PUTBooks from '../services/books/requests/PUTBooks.requests'

const payloadUpdateBook = require('../../fixtures/update-book.json')

let resUpdateBook = ''; 

When(/^atualizo o nome do livro$/, () => {
    cy.get('@getAllBooks').then((busca) => {
        PUTBooks.updateBooks(busca.body[0].ID).should((updateBook) =>{
            expect(updateBook.status).to.eq(200)
            resUpdateBook = updateBook.body.Title
        })
    })
});

Then(/^o titulo do livro foi atualizado$/, () => {
    cy.log(resUpdateBook)
    expect(resUpdateBook).to.eq(payloadUpdateBook.Title)
});


 
