describe('Form Validation Tests', () => {
  beforeEach(() => {
      // Visit the Automation Test Store contact page before each test
      cy.visit('https://automationteststore.com/index.php?rt=content/contact')
  })

  it('should show errors when all fields are left empty', () => {
      // Click the submit button
      cy.get('input[type="submit"]').click()

      // Check for required field error messages
      cy.get('.error').should('contain', 'Name is required')
      cy.get('.error').should('contain', 'Email is required')
      cy.get('.error').should('contain', 'Message is required')
  })

  it('should show an error for an invalid email address', () => {
      // Fill out the form with an invalid email
      cy.get('input[name="name"]').type('John Doe')
      cy.get('input[name="email"]').type('invalid-email')
      cy.get('textarea[name="message"]').type('This is a test message')

      // Click the submit button
      cy.get('input[type="submit"]').click()

      // Check for email format error message
      cy.get('.error').should('contain', 'Email is invalid')
  })

  it('should show an error for a short password (if applicable)', () => {
      // Example only if password field exists
      cy.visit('https://automationteststore.com/index.php?rt=account/login')

      // Fill out the login form with a short password
      cy.get('input[name="username"]').type('testuser')
      cy.get('input[name="password"]').type('short')
      
      // Click the submit button
      cy.get('input[type="submit"]').click()

      // Check for password length error message
      cy.get('.error').should('contain', 'Password must be at least 6 characters')
  })

  it('should show an error for mismatched passwords (if applicable)', () => {
      // Example only if registration form exists
      cy.visit('https://automationteststore.com/index.php?rt=account/register')

      // Fill out the registration form with mismatched passwords
      cy.get('input[name="password"]').type('password123')
      cy.get('input[name="confirm_password"]').type('differentpassword')

      // Click the submit button
      cy.get('input[type="submit"]').click()

      // Check for password mismatch error message
      cy.get('.error').should('contain', 'Passwords do not match')
  })

  it('should handle special characters appropriately', () => {
      // Fill out the form with special characters
      cy.get('input[name="name"]').type('<script>alert("XSS")</script>')
      cy.get('input[name="email"]').type('special@chars.com')
      cy.get('textarea[name="message"]').type('<div>Special characters test</div>')

      // Click the submit button
      cy.get('input[type="submit"]').click()

      // Check for proper handling of special characters
      cy.get('.error').should('not.exist')
  })

  it('should handle input exceeding maximum length', () => {
      // Fill out the form with a long input
      cy.get('input[name="name"]').type('A'.repeat(256)) // Assuming max length is 255
      cy.get('input[name="email"]').type('longemail@example.com')
      cy.get('textarea[name="message"]').type('This is a test message')

      // Click the submit button
      cy.get('input[type="submit"]').click()

      // Check for error related to exceeding max length
      cy.get('.error').should('contain', 'Name is too long')
  })

  it('should handle SQL injection inputs gracefully', () => {
      // Fill out the form with SQL injection strings
      cy.get('input[name="name"]').type("Robert'); DROP TABLE Students;--")
      cy.get('input[name="email"]').type('sqltest@example.com')
      cy.get('textarea[name="message"]').type('SQL Injection Test')

      // Click the submit button
      cy.get('input[type="submit"]').click()

      // Check for proper handling of SQL injection
      cy.get('.error').should('not.exist')
  })
})
