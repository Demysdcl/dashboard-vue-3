const APP_URL = process.env.APP_URL || 'http://localhost:8080'

describe('Credentials', () => {
  it('should render create account modal when click on header login button', () => {
    cy.visit(APP_URL)

    cy.get('#header-login-button').click()

    cy.get('#modal-login')

    cy.get('#name-input').type('Demys')
    cy.get('#email-input').type('demysdcl@gmail.com')
    cy.get('#password-input').type('123')
    cy.get('#submit-button').click()

    cy.wait(4000)
    cy.visit(`${APP_URL}/credentials`)
    cy.wait(2000)
  })

  it('should show an error for invalid e-mail', () => {
    cy.visit(APP_URL)

    cy.get('#header-login-button').click()

    cy.get('#modal-login')

    cy.get('#email-input').type('demysdcl@gmail')

    cy.get('#email-error')
  })

  it('should logout correctly', () => {
    cy.visit(APP_URL)

    cy.get('#header-login-button').click()

    cy.get('#modal-login')

    cy.get('#email-input').type('demysdcl@gmail.com')
    cy.get('#password-input').type('123')
    cy.get('#submit-button').click()

    cy.url().should('include', '/feedbacks')
    cy.get('#logout-button').click()
    cy.url().should('include', '/')
  })
})
