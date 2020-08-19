/// <reference types="cypress"/>
import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import * as GETBooks from '../services/books/requests/GETBooks.requests'
import * as POSTBooks from '../services/books/requests/POSTBooks.requests'
import * as DELETEBooks from '../services/books/requests/DELETEBooks.requests'

const payloadAddBook = require("../../fixtures/add-book.json")

Then(/^a api retorna status "([^"]*)" para "([^"]*)"$/, (reqStatus, alias) => {
	cy.get(alias).then((response) => {
        cy.log(response.status)
        expect(response.status).to.be.equal(parseInt(reqStatus));
        assert.equal(response.status, parseInt(reqStatus), `Status retornando deve ser ${reqStatus}`);
    })
});

Then(/^o response nao pode retornar vazio para "([^"]*)"$/, (alias) => {
	cy.get(alias).then((response) => {
        expect(response.body).to.not.be.null;
    })	
});
