describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it.only('preenche os campos obrigatórios e envia o formulário', () => {
    cy.get('#firstName').type('Milton')
    cy.get('#lastName').type('Araújo')
    cy.get('#email').type('miltonjr.dev@gmail.com')
    cy.get('#open-text-area').type('Obrigado!')
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })
})
