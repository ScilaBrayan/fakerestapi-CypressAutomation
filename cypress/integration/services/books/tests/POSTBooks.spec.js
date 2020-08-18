/// <reference types="cypress"/>
import * as POSTBooks from '../requests/POSTBooks.requests'

let resAddBook = '';

describe('POST Books', () => {

    it('Adicionar novo livro', () => {
        POSTBooks.addBooks().should((response =>{
            expect(response.status).to.eql(200)
            resAddBook = response
        }))
    });

    it('Retorno não deve ser vazio', () => {
        expect(resAddBook.body).to.not.be.null;
    });

    it('O nome do livro deve ser Harry Potter e a Pedra Filosofal', () => {
        expect(resAddBook.body.Title).to.eql("Harry Potter e a Pedra Filosofal");
    });
});