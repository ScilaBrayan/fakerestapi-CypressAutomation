/// <reference types="cypress"/>
import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import * as POSTBooks from '../services/books/requests/POSTBooks.requests'

const payloadAddBook = require("../../fixtures/add-book.json")

Given(/^eu possuo um livro para cadastrar$/, () => {
	expect(payloadAddBook).to.not.be.empty;
});

When(/^insiro o registro na base$/, () => {
	POSTBooks.addBooks()
});

Then(/^a api retorna status "([^"]*)"$/, (postStatus) => {
	cy.get('@postNewBook').then((response) => {
        cy.log(response.status)
        expect(response.status).to.be.equal(parseInt(postStatus));
        assert.equal(response.status, parseInt(postStatus), "Status retornando deve ser 200");
    })
});

Then(/^o response nao pode retornar vazio$/, () => {
	cy.get('@postNewBook').then((response) => {
        expect(response.body).to.not.be.null;
    })	
});

Then(/^o titulo deve ser "([^"]*)"$/, (postTitle) => {
	cy.get('@postNewBook').then((response) => {
        expect(response.body.Title).to.eql(postTitle);
	})
});


