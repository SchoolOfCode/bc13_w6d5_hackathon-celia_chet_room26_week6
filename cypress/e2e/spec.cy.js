describe('testing website', () => {

it('passes', () => {
    cy.visit('localhost:3000')
})

it('adding todo', ()=>{
  cy.get('[data-cy="task-input"]').type('this is a test task').should('have.value','this is a test task')
  cy.get('[data-cy="date-input"]').type('2022-01-23').should('have.value','2022-01-23')
  cy.get('[data-cy="create-button"]').click()
  
})


it('reload page and check if elements are still there', ()=>{
  cy.reload()
  cy.get('#todos > li:nth-child(1) > span').should('have.text','Walk the dog')
  cy.get('#todos > li:nth-child(2) > span').should('have.text','Feed the computer')
  cy.get('#todos > li:nth-child(3) > span').should('have.text','this is a test task')
})

it('deleting todo', ()=>{
  cy.get('#todos > li:nth-child(3) > button').click()
})

it('reload page and check if elements are still there', ()=>{
  cy.reload()
  cy.get('#todos > li:nth-child(1) > span').should('have.text','Walk the dog')
  cy.get('#todos > li:nth-child(2) > span').should('have.text','Feed the computer')
  cy.get('#todos > li:nth-child(3) > span').should('not.exist')
})


})




