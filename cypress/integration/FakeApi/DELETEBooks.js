/// <reference types="cypress"/>
import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import * as DELETEBooks from '../services/books/requests/DELETEBooks.requests'

When(/^deleto livro de ID "([^"]*)"$/, (args1) => {
    cy.get('@getAllBooks').then((busca) => {
        DELETEBooks.deleteBooks(busca.body[parseInt(args1)].ID).should((resDelete) =>{
            expect(resDelete.status).to.eq(200)
        })
    })
});

Then(/^a api retorna status "([^"]*)"$/, (postStatus) => {
    cy.get('@deleteBook').then((response) =>{
        expect(response.status).to.be.equal(parseInt(postStatus));
        assert.equal(response.status, parseInt(postStatus), "Status retornando deve ser 200");
    })
});
