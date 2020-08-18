/// <reference types="cypress"/>
import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import * as GETBooks from '../services/books/requests/GETBooks.requests'


When(/^valido se nao se encontra vazio$/, () => {
	cy.get('@getAllBooks').then((response) => {
        expect(response).to.not.be.null;
    })
});

Then(/^valido se retornou ao menos "([^"]*)"$/, (args1) => {
	cy.get('@getAllBooks').then((response) => {
        expect(response.body).to.have.length.above(parseInt(1));
    })
});
