# Projeto de Testes E2E com Cypress

Este repositório contém testes automatizados para validar os fluxos de usuário em uma aplicação web RCFITNESS utilizando o Cypress. O foco principal está em testar o cadastro de usuários, login, criação de receitas, visualização e exclusão, além de validações de campos vazios.

## Tecnologias Utilizadas

- **Cypress**: Framework de testes end-to-end.
- **faker.js**: Biblioteca para geração de dados falsos para testes.
- **cypress-file-upload**: Para realizar upload de arquivos em testes.

## Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** instalados no seu ambiente de desenvolvimento. Você pode verificar se já possui o Node.js e o npm instalados com os seguintes comandos:

Caso não tenha o Node.js, faça o download e instalação a partir do site oficial.

Instalação
Passo 1: Clone o Repositório
Clone este repositório para a sua máquina local:
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio


Passo 2: Instalar as Dependências
Na raiz do projeto, execute o seguinte comando para instalar todas as dependências do projeto, incluindo o Cypress:

npm install
Esse comando irá instalar o Cypress e outras dependências necessárias para rodar os testes.

Passo 3: Executar os Testes
Após instalar as dependências, você pode executar os testes utilizando o Cypress. Use o comando abaixo para abrir a interface gráfica do Cypress:

npx cypress open
Isso abrirá o Cypress e permitirá que você execute os testes diretamente através da interface. Se preferir rodar os testes no terminal, utilize o comando:


npx cypress run
