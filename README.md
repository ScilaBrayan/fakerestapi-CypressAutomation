<h1 align="center">Fake REST API com Cypress</h1>
<p align="center">Projeto criado para estudar a aplicabilidade do cypress em teste de REST API e GIT HUB CI.</p>
<p align="center">utilizando o site https://fakerestapi.azurewebsites.net/</p>

--------------------------
<h3>Estrutura do Projeto</h3>

```
├── Cypress
    ├── fixtures 
    ├── integration
        ├── Books
        ├── common
        ├── services
            ├── books
                ├── requests
                ├── tests
        ├── All.feature
        ├── .feature
    ├── plugins
        ├── index.js
    ├── reports
        ├── cucumber-json
        ├── report-html 
    ├── support
        ├── index.js
        ├── commans.js 
├── mochawesome-report
├── node_modules
├── .gitignore
├── .npmrc
├── cypress.json
├── cypress-cucumber.json
├── package.json
├── README.md  
```

- A pasta `mochawesome-report` gera relatório com base no mochawesome, para realizar alguma configuração adicionar, utilizar o arquivo `reporter-config.json`. 

<h2> Dependencias usadas no projeto</h2>

- cypress-cucumber-preprocessor 

- Cucumber HTML Reporter:


<h3>Instalar as dependencias</h3>

```
    npm install 
```

<h2>Executar os testes</h2>

<h3>Através das specs</h3>

````
    npm run cypress:run
````

<h3>Através do cucumber</h3>

````
    npm run cy:run:cucumber
````

<h2>Para gerar os relatórios</h2>


<h3>Através do mochawesome</h3>

```
    npm run mocha:merge
```

```
    npm run mocha:generate
```

Abrir o arquivo `full_report.html` que se encontra na pasta `mochawesome-report`

<h3>Através do cucumber</h3>

```
    npm run reporter:cucumber
```

<h3>Limpar ambiente de relatórios</h3>

```
    npm run reporter:clean
```


<h2>GitHub Pages</h2>

 https://scilabrayan.github.io/fakerestapi-CypressAutomation/
