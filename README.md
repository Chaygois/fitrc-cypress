# Testes Automatizados Cypress para FITRC

Este repositório contém testes automatizados end-to-end para validar os principais fluxos de usuário na aplicação web RCFITNESS. Os testes foram desenvolvidos utilizando Cypress e abrangem funcionalidades como cadastro de usuários, login, criação, visualização e exclusão de receitas..

## Funcionalidades Testadas

### Cadastro de Usuário
- ✅ Verifica o fluxo de cadastro com dados válidos e inválidos.
- ✅ Valida mensagens de erro para campos obrigatórios não preenchidos.
- ✅ Testa o cadastro com e-mail já registrado.

### Login de Usuário
- ✅ Testa o login com credenciais válidas e inválidas.
- ✅ Verifica mensagens de erro para credenciais inválidas.

### Criação de Receitas
- ✅ Valida a criação de novas receitas com e sem upload de imagens.
- ✅ Verifica mensagens de erro para campos obrigatórios não preenchidos.
- ✅ Testa a criação de receitas com diferentes tipos de dados.

### Visualização de Receitas
- ✅ Verifica a exibição correta das receitas criadas.
- ✅ Testa a navegação entre as páginas de receitas.

### Exclusão de Receitas
- ✅ Testa a exclusão de receitas existentes.
- ✅ Verifica se a receita é removida da lista após a exclusão.


## Tecnologias Utilizadas
- **Cypress:** Framework de testes end-to-end para aplicações web modernas.
- **faker.js:** Biblioteca para geração de dados fictícios para testes, garantindo a independência dos testes.
- **cypress-file-upload:** Plugin para simular o upload de arquivos durante os testes.

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de que o Node.js e o npm estão instalados no seu ambiente de desenvolvimento.

Verifique a instalação com os comandos:

```bash
node -v
npm -v
Caso não estejam instalados, baixe e instale a versão mais recente do Node.js em nodejs.org.

Instalação
1️⃣ Clone o Repositório
bash

git clone https://github.com/Chaygois/rc-cypress.git
cd rc-cypress
2️⃣ Instale as Dependências
bash

npm install
Este comando instala o Cypress, o faker.js, o cypress-file-upload e outras dependências necessárias.

⚙️ Configuração do Ambiente
Variáveis de Ambiente: Se o projeto utiliza variáveis de ambiente, configure-as conforme a documentação do RCFITNESS.

Configuração do Cypress: O arquivo cypress.config.js contém as configurações do Cypress. Ajuste conforme necessário.

▶️ Execução dos Testes
📌 Abrir a Interface Gráfica do Cypress
bash

npx cypress open
Este comando abre o Cypress Test Runner, onde você pode selecionar e executar os testes interativamente.

📌 Executar os Testes no Terminal (Modo Headless)
bash

npx cypress run
Ideal para integração contínua e pipelines de CI/CD, executando os testes diretamente no terminal.

📌 Executar um Teste Específico
bash

npx cypress run --spec "cypress/e2e/nome-do-teste.cy.js"
📌 Executar Testes de um Diretório
bash

npx cypress run --spec "cypress/e2e/diretorio/*"
🎥 Visualizando os Vídeos dos Testes
Durante a execução dos testes no modo headless (npx cypress run), o Cypress grava vídeos automaticamente.

Os vídeos são salvos na pasta:

bash


cypress/videos/
Para visualizar um vídeo específico, basta abrir o arquivo .mp4 gerado no seu player de vídeo preferido.


✨ Autora
Chayanny Gois
