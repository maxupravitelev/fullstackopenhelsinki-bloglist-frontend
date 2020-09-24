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

    cy.contains('\'root\' logged in')
  })

  describe('when logged in', function() {
    beforeEach(function() {
      cy.contains('login').click()
      cy.get('input:first').type('root')
      cy.get('input:last').type('sekret')
      cy.get('#login-button').click()
    })

    it('a new blog can be created', function() {
      cy.contains('new blog').click()
      cy.get('#title').type('a blog created by cypress')
      cy.get('#author').type('author')
      cy.get('#url').type('www.test.io')
      cy.contains('create').click()
      cy.contains('a blog created by cypress')
    })
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