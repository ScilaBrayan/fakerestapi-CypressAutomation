/// <reference types="cypress"/>
import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import * as GETBooks from '../services/books/requests/GETBooks.requests'
import * as POSTBooks from '../services/books/requests/POSTBooks.requests'
import * as DELETEBooks from '../services/books/requests/DELETEBooks.requests'

const payloadAddBook = require("../../fixtures/add-book.json")