# Testes Automatizados Cypress para RCFITNESS

Este repositório contém testes automatizados end-to-end para validar os principais fluxos de usuário na aplicação web RCFITNESS. Os testes foram desenvolvidos utilizando o Cypress e abrangem funcionalidades como cadastro de usuários, login, criação, visualização e exclusão de receitas, além de validações de campos obrigatórios.

## Funcionalidades Testadas

* **Cadastro de Usuário:** Verifica o fluxo de cadastro, incluindo validações de campos obrigatórios.
* **Login de Usuário:** Testa o login com credenciais válidas e inválidas.
* **Criação de Receitas:** Valida a criação de novas receitas, incluindo o upload de imagens.
* **Visualização de Receitas:** Verifica a exibição correta das receitas criadas.
* **Exclusão de Receitas:** Testa a exclusão de receitas existentes.
* **Validação de Campos Vazios:** Garante que a aplicação lida corretamente com campos obrigatórios não preenchidos.

## Tecnologias Utilizadas

* **Cypress:** Framework de testes end-to-end para aplicações web modernas.
* **faker.js:** Biblioteca para geração de dados fictícios para testes, garantindo a independência dos testes.
* **cypress-file-upload:** Plugin Cypress para simular o upload de arquivos durante os testes.

## Pré-requisitos

* **Node.js e npm:** Certifique-se de que o Node.js e o npm estejam instalados no seu ambiente de desenvolvimento.
    * Verifique a instalação com os comandos: `node -v` e `npm -v`.
    * Caso não estejam instalados, baixe e instale a versão mais recente do Node.js em [nodejs.org](https://nodejs.org/).

## Instalação

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    cd seu-repositorio
    ```
2.  **Instale as Dependências:**
    ```bash
    npm install
    ```
    Este comando instala o Cypress, o faker.js, o cypress-file-upload e outras dependências necessárias.

## Execução dos Testes

1.  **Abra a Interface Gráfica do Cypress:**
    ```bash
    npx cypress open
    ```
    Este comando abre o Cypress Test Runner, onde você pode selecionar e executar os testes interativamente.
2.  **Execute os Testes no Terminal (Modo Headless):**
    ```bash
    npx cypress run
    ```
    Este comando executa os testes diretamente no terminal, sem abrir a interface gráfica. Ideal para integração contínua e pipelines de CI/CD.

## Licença

QAC - LTDA

## Autores

* Chayanny Gois
