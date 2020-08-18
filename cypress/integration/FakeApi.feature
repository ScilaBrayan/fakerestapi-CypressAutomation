Feature: Books

Scenario: Adiciona Livros 
    Given eu possuo um livro para cadastrar
    When insiro o registro na base
    Then a api retorna status "200" para "@postNewBook"
    And o response nao pode retornar vazio para "@postNewBook"
    And o titulo deve ser "Harry Potter e a Pedra Filosofal"

Scenario: Busca Livro
    Given livros foram listados 
    When valido se nao se encontra vazio
    Then valido se retornou ao menos "1"

Scenario: Deletar um livro
    Given livros foram listados
    When deleto livro de ID "1"
    Then a api retorna status "200" para "@deleteBook"

Scenario: Criar e deletar um livro 
    Given eu possuo um livro para cadastrar
    When insiro o registro na base
    Then a api retorna status "200" para "@postNewBook"
    Given livros foram listados 
    When deleto livro de ID "0"
    Then a api retorna status "200" para "@deleteBook"

Scenario: Atualizar um livro
    Given livros foram listados 
    When atualizo o nome do livro
    Then o titulo do livro foi atualizado