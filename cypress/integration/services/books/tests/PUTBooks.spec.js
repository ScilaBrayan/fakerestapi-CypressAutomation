/// <reference types="cypress"/>
import * as POSTBooks from '../requests/POSTBooks.requests'
import * as PUTBooks from '../requests/PUTBooks.requests'
import * as GETBooks from '../requests/GETBooks.requests'

describe('PUT Books', () => {
    it('Atualizar um livro', () => {
        GETBooks.allBooks().then(busca =>{
            PUTBooks.updateBooks(busca.body[0].ID).should((updateBook) =>{
                expect(updateBook.status).to.eq(200)
                expect(updateBook.body).to.not.be.null;
                expect(updateBook.body.Title).to.eq('Livro')

            })
        })
    });

    it('Criar e alterar o livro criado', () => {
        POSTBooks.addBooks().then(addBook =>{
            expect(addBook.status).to.eq(200)
            expect(addBook.body).to.not.be.null;

            PUTBooks.updateBooks(addBook.body.ID).should((updateBook) =>{
                expect(updateBook.status).to.eq(200)
                expect(updateBook.body.Title).to.eq('Livro')
            })
        })
    });
});