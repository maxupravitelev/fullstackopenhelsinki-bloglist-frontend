describe('Blog app', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('login')
    //   cy.contains('Note app, Department of Computer Science, University of Helsinki 2020')
  })

  it('login form can be opened', function() {
    cy.contains('login').click()
  })

  it('user can login', function () {
    cy.contains('login').click()
    cy.get('#username').type('root')
    cy.get('#password').type('sekret')
    cy.get('#login-button').click()

    // cy.contains('root logged in')
  })  

})


// describe('Blog app', function() {
//   beforeEach(function() {
//     cy.request('POST', 'http://localhost:3001/api/testing/reset')
//     cy.visit('http://localhost:3000')
//     cy.contains('login')
//   })

//   it('Login form is shown', function() {
//     // ...
//   })
// })