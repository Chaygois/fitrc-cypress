# Testes Automatizados Cypress para FITRC

Este repositório contém testes automatizados end-to-end para validar os principais fluxos de usuário na aplicação web RCFITNESS. Os testes foram desenvolvidos utilizando o Cypress e abrangem funcionalidades como cadastro de usuários, login, criação, visualização e exclusão de receitas, além de validações de campos obrigatórios.

## Funcionalidades Testadas

-   **Cadastro de Usuário:**
    -   Verifica o fluxo de cadastro com dados válidos e inválidos.
    -   Valida mensagens de erro para campos obrigatórios não preenchidos.
    -   Testa o cadastro com e-mail já registrado.
-   **Login de Usuário:**
    -   Testa o login com credenciais válidas e inválidas.
    -   Verifica mensagens de erro para credenciais inválidas.
-   **Criação de Receitas:**
    -   Valida a criação de novas receitas com e sem upload de imagens.
    -   Verifica mensagens de erro para campos obrigatórios não preenchidos.
    -   Testa a criação de receitas com diferentes tipos de dados.
-   **Visualização de Receitas:**
    -   Verifica a exibição correta das receitas criadas.
    -   Testa a navegação entre as páginas de receitas.
-   **Exclusão de Receitas:**
    -   Testa a exclusão de receitas existentes.
    -   Verifica se a receita é removida da lista após a exclusão.
-   **Validação de Campos Vazios:**
    -   Garante que a aplicação lida corretamente com campos obrigatórios não preenchidos em todos os formulários.

## Tecnologias Utilizadas

-   **Cypress:** Framework de testes end-to-end para aplicações web modernas.
-   **faker.js:** Biblioteca para geração de dados fictícios para testes, garantindo a independência dos testes.
-   **cypress-file-upload:** Plugin Cypress para simular o upload de arquivos durante os testes.

## Pré-requisitos

-   **Node.js e npm:** Certifique-se de que o Node.js e o npm estejam instalados no seu ambiente de desenvolvimento.
    -   Verifique a instalação com os comandos: `node -v` e `npm -v`.
    -   Caso não estejam instalados, baixe e instale a versão mais recente do Node.js em [nodejs.org](https://nodejs.org/).

## Instalação

1.  Clone o Repositório:

    ```bash
    git clone [https://github.com/Chaygois/rc-cypress.git](https://www.google.com/search?q=https://github.com/Chaygois/rc-cypress.git)
    cd rc-cypress
    ```

2.  Instale as Dependências:

    ```bash
    npm install
    ```

    Este comando instala o Cypress, o faker.js, o cypress-file-upload e outras dependências necessárias.

## Configuração do Ambiente

-   **Variáveis de Ambiente:** Se o seu projeto utiliza variáveis de ambiente, configure-as de acordo com a documentação do projeto RCFITNESS.
-   **Configuração do Cypress:** O arquivo `cypress.config.js` contém as configurações do Cypress. Ajuste-as conforme necessário.

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

3.  **Executar Testes Específicos:**

    -   Para executar um teste específico, use o comando:

        ```bash
        npx cypress run --spec "cypress/e2e/nome-do-teste.cy.js"
        ```

    -   Para executar testes em um diretório específico, use:

        ```bash
        npx cypress run --spec "cypress/e2e/diretorio/*"
        ```
## Autores

Chayanny Gois
