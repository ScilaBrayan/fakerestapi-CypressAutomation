/// <reference types="cypress"/>
import * as DELETEBooks from '../requests/DELETEBooks.requests'
import * as GETBooks from '../requests/GETBooks.requests'
import * as POSTBooks from '../requests/POSTBooks.requests'


describe('DELETE Books', () => {
    it('Deletar um livro', () => {
        GETBooks.allBooks().then(busca =>{
            DELETEBooks.deleteBooks(busca.body[0].ID).should((resDelete) =>{
                expect(resDelete.status).to.eq(200)
            })
        })
    });

    it('Criar e deletar um livro', () => {
        POSTBooks.addBooks().then(addBook =>{
            cy.log(addBook.body)
            DELETEBooks.deleteBooks(addBook.body.ID).should((resDelete) =>{
                expect(resDelete.status).to.eq(200)
            })
        })
    });
});