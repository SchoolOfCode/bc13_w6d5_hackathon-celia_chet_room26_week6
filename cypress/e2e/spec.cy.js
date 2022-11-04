describe('testing website', () => {
  it('passes', () => {
    cy.visit('localhost:3000')
  })
it('adding todo', ()=>{
  cy.get('[data-cy="task-input"]').type('this is a test task')
  cy.get('[data-cy="date-input"]').type('2022-01-23')
  cy.get('[data-cy="create-button"]').click()
  
})
})




