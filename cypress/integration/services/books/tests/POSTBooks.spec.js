/// <reference types="cypress"/>
import * as POSTBooks from '../requests/POSTBooks.requests'

describe('POST Books', () => {

    it('Adicionar novo livro', () => {
        POSTBooks.addBooks().should((response =>{
            expect(response.status).to.eql(200)
            expect(response.body).to.not.be.null;
            expect(response.body.Title).to.eql("string");

        }))
    });
});