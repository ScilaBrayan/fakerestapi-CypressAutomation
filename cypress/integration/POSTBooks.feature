Feature: Adicionar Livros

    Como usuário 
    Quero adicionar livros 
    Para ele ser salvo na base

Scenario Outline: Adiciona Livros 
    Given eu possuo um livro para cadastrar
    When eu insiro na base
    Then a api retorna status "200"
    And o response nao pode retornar vazio
    And o titulo deve ser "string"