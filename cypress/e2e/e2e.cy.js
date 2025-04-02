import { faker } from '@faker-js/faker';
import 'cypress-file-upload';

// Comandos customizados para reutilização do login e cadastro
Cypress.Commands.add('registerUser', (nome, email, senha) => {
  cy.contains('Sign-Up').click();
  cy.get('#name').type(nome);
  cy.get('#email').type(email);
  cy.get('#password').type(senha);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('loginUser', (email, senha) => {
  cy.contains('Login').click();
  cy.get('#email').type(email);
  cy.get('#password').type(senha);
  cy.get('button[type="submit"]').click();
  cy.url().should('include', '/dashboard'); // Verifica que estamos no dashboard
});

describe('Cadastro, login, criação de receita, upload de imagem, visualização de Receita e logout', () => {
  let nome, email, senha;

  beforeEach(() => {
    nome = faker.name.firstName();
    email = faker.internet.email();
    senha = faker.internet.password();

    cy.visit('https://rfitness-front-2ygs.vercel.app/');
    cy.registerUser(nome, email, senha);
    cy.loginUser(email, senha);
  });

  afterEach(() => {
    // Se o botão "Sair" existir, faz logout
    cy.get('body').then(($body) => {
      if ($body.find('button:contains("Sair")').length > 0) {
        cy.contains('Sair').click();
        cy.url().should('include', '/login');
      }
    });
  });

  it('Deve criar uma receita com upload de imagem e verificar a exibição', () => {
    // Interceptar a requisição de criação da receita
    cy.intercept('POST', '/api/recipes').as('createRecipe');

    // Navegar até a página de Criar Receita
    cy.get('a[href="/create-recipe"]').click();
    cy.url().should('include', '/create-recipe');

    // Preencher o formulário da receita
    cy.get('input[id="titulo"]').type('Bolo de Chocolate');
    cy.get('textarea[id="descricao"]').type('Delicioso bolo de chocolate com cobertura de brigadeiro');
    cy.get('textarea[id="ingredientes"]').type('Farinha de trigo, chocolate, ovos, leite condensado');
    cy.get('textarea[id="modoPreparo"]').type('Misture tudo e leve ao forno por 30 minutos');
    cy.get('input[id="popularidade"]').type('5');
    cy.get('input[id="tempoPreparo"]').type('45');
    cy.get('input[id="categoria"]').type('Sobremesa');
    cy.get('input[id="calorias"]').type('350');
    cy.get('input[id="proteinas"]').type('5g');
    cy.get('input[id="carboidratos"]').type('60g');
    cy.get('input[id="gorduras"]').type('15g');

    // Upload da imagem
    cy.get('input[id="imagem"]').attachFile('bolo.png');
    cy.wait(2000); // Dá tempo para o upload ser processado
    cy.get('.create-recipe-button').click();
    // Verificar se a receita foi criada com sucesso
    cy.contains('Receita criada com sucesso').should('be.visible');

    // Voltar ao Dashboard
    cy.get('.voltar-btn').click();
    cy.url().should('include', '/dashboard');

    // Acessar "Minhas Receitas"
    cy.get('a[href="/my-recipes"]').click();

    // Verificar se a receita recém criada aparece na listagem
    cy.contains('Bolo de Chocolate').should('be.visible');

    // Voltar para o dashboard
    cy.get('.voltar-btn').click();
  });
});
