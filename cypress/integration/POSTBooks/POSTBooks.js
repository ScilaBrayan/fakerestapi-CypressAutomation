/// <reference types="cypress"/>
import { Given } from "cypress-cucumber-preprocessor/steps";
import * as POSTBooks from '../services/books/requests/POSTBooks.requests'

const resPostBook = null; 

Given(/^eu possuo um livro para cadastrar$/, () => {
	return true;
});

When(/^eu insiro na base$/, () => {
	return resPostBook = POSTBooks.addBooks()
});

Then(/^a api retorna status "([^"]*)"$/, (postStatus) => {
	expect(resPostBook.status).to.eql(postStatus)
});

Then(/^o response nao pode retornar vazio$/, () => {
	expect(resPostBook.body).to.not.be.null;
});

Then(/^o titulo deve ser "([^"]*)"$/, (postTitle) => {
	expect(resPostBook.body.Title).to.eql(postTitle);

});
