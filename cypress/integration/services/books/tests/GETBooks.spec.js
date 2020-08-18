/// <reference types="cypress"/>
import * as GETBooks from '../requests/GETBooks.requests'

describe('GETBooks', () => {
    it('Validar status de retorno', () => {
        GETBooks.allBooks().should((response) =>{
            expect(response.status).to.eql(200)
        })
    });

    it('Validar se o body não se encontra vazio', () => {
        GETBooks.allBooks().should((response) =>{
            expect(response).to.not.be.null;
        })
    });

    it('Validar tamanho do array', () => {
        GETBooks.allBooks().should((response) =>{
            expect(response.body).to.have.length.above(1);
            cy.log(response.body.length)
        })
    });
});