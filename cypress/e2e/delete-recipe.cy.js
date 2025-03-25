import { faker } from '@faker-js/faker';
import 'cypress-file-upload';

describe('Excluir Receita', () => {
  it('Deve criar e excluir uma receita', () => {
    const nome = faker.name.firstName();
    const email = faker.internet.email();
    const senha = faker.internet.password();

    cy.visit('https://rfitness-front-2ygs.vercel.app/');

    // Cadastro
    cy.contains('Sign-Up').click();
    cy.get('#name').type(nome);
    cy.get('#email').type(email);
    cy.get('#password').type(senha);
    cy.get('button[type="submit"]').click();

    // Login
    cy.contains('Login').click();
    cy.get('#email').type(email);
    cy.get('#password').type(senha);
    cy.get('button[type="submit"]').click({ force: true });
    cy.url().should('include', '/dashboard');

    // Criar uma receita
    cy.get('a[href="/create-recipe"]').click();
    cy.url().should('include', '/create-recipe');
    
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
    cy.get('input[id="imagem"]').attachFile('bolo.png');
    
    cy.get('button[type="submit"]').click({ force: true });
    cy.contains('Receita criada com sucesso').should('be.visible');
    
    // Voltar ao dashboard e acessar Minhas Receitas
    cy.get('.voltar-btn').click();
    cy.url().should('include', '/dashboard');
    cy.get('a[href="/my-recipes"]').click();

    // Verificar se a receita está listada e excluí-la
    cy.contains('Bolo de Chocolate').should('be.visible');
    
    // Confirmar exclusão (caso haja um modal de confirmação, ajuste conforme necessário)
    cy.get('.delete-button').click(); // Ajustado para o seletor correto

    
    // Garantir que a receita foi removida
    cy.contains('Bolo de Chocolate').should('not.exist');
    
    // Voltar para o dashboard e sair
    cy.get('.voltar-btn').click();
    cy.contains('Sair').click();
    cy.url().should('include', '/login');
  });
});
