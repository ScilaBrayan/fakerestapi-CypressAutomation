<h1 align="center">Fake REST API com Cypress</h1>
<p align="center">Projeto criado para estudar a aplicabilidade do cypress em teste de REST API e GIT HUB CI.</p>
<p align="center">utilizando o site https://fakerestapi.azurewebsites.net/</p>

--------------------------
<h3>Estrutura do Projeto</h3>

```
├── Cypress
    ├── fixtures 
    ├── integration
        ├── services
            ├── books
                ├── payloads
                ├── requests
                ├── tests
        ├── .feature
    ├── plugins
        ├── index.js
    ├── support
        ├── index.js
        ├── commans.js  
├── node_modules
├── .gitignore
├── .npmrc
├── cypress.json
├── cypress-cucumber.json
├── package.json
├── README.md  
```

<h3> Dependencias usadas no projeto</h3>

- cypress-cucumber-preprocessor 

<h3>Instalar as dependencias</h3>

```
    npm install 
```

<h3>Executar os testes</h3>

````
    npm run cypress:run
````

<h2>GitHub Pages</h2>

Em breve ...
