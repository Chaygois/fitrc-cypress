describe('Cadastro de usuário com e-mail já existente', () => {

    // Variáveis para o e-mail de teste e senha
    const email = 'usuario_teste@example.com';  
    const senha = 'Senha123!';
  
    it('Não deve permitir o cadastro de um usuário com um e-mail já existente', () => {
      
      // Passo 1: Acessar a página de cadastro
      cy.visit('https://rfitness-front-2ygs.vercel.app/signup');
      
      // Passo 2: Criar um usuário com o e-mail de teste
      cy.get('input[id="nome"]').type('Usuário Teste');  // Preenche o nome
      cy.get('input[id="email"]').type(email);          // Preenche o e-mail
      cy.get('input[id="senha"]').type(senha);          // Preenche a senha
      cy.get('button[type="submit"]').click();          // Submete o formulário
      
      // Passo 3: Garantir que o cadastro foi feito com sucesso (aguarda redirecionamento ou mensagem de sucesso)
      cy.url().should('include', '/dashboard');  // Ou qualquer URL após login ou página de sucesso
      
      // Passo 4: Fazer logout (se necessário, use a funcionalidade de logout)
      cy.get('button[id="logout"]').click();   // Exemplo de como fazer logout, verifique o ID correto do botão
      
      // Passo 5: Tentar cadastrar novamente com o mesmo e-mail
      cy.visit('https://rfitness-front-2ygs.vercel.app/register');
      
      // Preenche novamente o formulário com o mesmo e-mail
      cy.get('input[id="nome"]').type('Outro Usuário');
      cy.get('input[id="email"]').type(email);          // E-mail já existente
      cy.get('input[id="senha"]').type(senha);          
      cy.get('button[type="submit"]').click();          // Submete o formulário
      
      // Passo 6: Verificar se o sistema exibe a mensagem de erro
      cy.get('.error-message') // Seleciona a mensagem de erro, ajuste o seletor conforme necessário
        .should('contain', 'Email já cadastrado');
    });
  });
  