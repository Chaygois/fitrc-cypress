import { faker } from '@faker-js/faker';
import 'cypress-file-upload';

describe('Cadastro, login, criação de receita, upload de imagem, visualização de Receita e logout.' , () => {
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
    cy.url().should('include', '/dashboard');


  
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




    // Upload da imagem: verifique se o caminho está correto e o arquivo existe na pasta cypress/fixtures/images
    cy.get('input[id="imagem"]').attachFile('bolo.png');       
    // Submeter o formulário de criar receita
    cy.get('button[type="submit"]').click({ force: true });

    // Verificar se a receita foi criada com sucesso
    cy.contains('Receita criada com sucesso').should('be.visible'); // Mensagem de sucesso, se aparecer


    // 6. Clicar no botão "Voltar" para voltar ao dashboard
    cy.get('.voltar-btn').click();

    // 7. Esperar a página de dashboard carregar e acessar "Minhas Receitas"
    cy.url().should('include', '/dashboard'); // Verifique que está no dashboard
    cy.get('a[href="/my-recipes"]').click();

    // 8. Visualizar a receita recém criada
    cy.contains('Bolo de Chocolate').should('be.visible'); // Confirma que a receita criada está visível

    // 9. Voltar para o dashboard
    cy.get('.voltar-btn').click(); // Voltar para a página inicial (Dashboard)




    
    // 10. Fazer logout
    cy.contains('Sair').click(); // Clicar no botão de "Sair" para finalizar a sessão

    // Verificar que a página foi redirecionada para login
    cy.url().should('include', '/login'); // Espera que a URL contenha '/login', indicando que a sessão foi encerrada
  });
});