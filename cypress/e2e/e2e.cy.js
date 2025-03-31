import { faker } from '@faker-js/faker';
import 'cypress-file-upload';

describe('Cadastro, login, criação de receita, upload de imagem, visualização de Receita e logout.', () => {
  it('Deve cadastrar o usuário, fazer login e criar uma receita com upload de imagem', () => {
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

    // Confirma que estamos no dashboard
    cy.url({ timeout: 10000 }).should('include', '/dashboard');

    // Garantir que o token foi salvo no localStorage
    cy.window().then((win) => {
      const token = win.localStorage.getItem('authToken');
      expect(token).to.exist;
    });

    // Navegar até a página de Criar Receita
    cy.get('a[href="/create-recipe"]').click();
    cy.url().should('include', '/create-recipe');

    // Preencher o formulário de criação de receita
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
    cy.get('input[id="imagem"]').attachFile('images/bolo.png', { force: true });

    // Submeter o formulário de criar receita
    cy.get('button[type="submit"]').click({ force: true });

    // Verificar se a receita foi criada com sucesso
    cy.contains('Receita criada com sucesso', { timeout: 5000 }).should('be.visible');

    // Clicar no botão "Voltar" para voltar ao dashboard
    cy.get('.voltar-btn', { timeout: 5000 }).should('be.visible').click();

    // Verifica se voltou ao dashboard e acessa "Minhas Receitas"
    cy.url().should('include', '/dashboard');
    cy.get('a[href="/my-recipes"]').click();

    // Visualizar a receita recém-criada
    cy.contains('Bolo de Chocolate', { timeout: 5000 }).should('be.visible');

    // Voltar para o dashboard
    cy.get('.voltar-btn', { timeout: 5000 }).should('be.visible').click();

    // Fazer logout
    cy.contains('Sair').click({ force: true });

    // Verificar que a página foi redirecionada para login
    cy.url({ timeout: 5000 }).should('include', '/login');
  });
});
