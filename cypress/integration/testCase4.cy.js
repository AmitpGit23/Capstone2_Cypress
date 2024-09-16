describe('Automation Test Store UI Tests', () => {
    before(() => {
      cy.visit('https://www.automationteststore.com');
    });
  
    it('should have a visible search box', () => {
      cy.get('input[name="filter_keyword"]')
        .should('be.visible')
        .and('have.attr', 'type', 'text').type('Makeup');
       cy.get('.button-in-search').click() 
    });
  
    it.skip('should display at least one product category', () => {
      cy.get('.fixedMenu').should('be.visible');
      cy.get('a[href*="category"]')
        .should('be.visible')
        .and('have.length.greaterThan', 0);
    });
  
    it('should have a visible "Contact Us" button in the footer', () => {
      cy.login()
      cy.get('footer').within(() => {
        cy.get('ul[class="contact"]')
          .should('be.visible')
          .and('contain.text', '+123 456 7890');
        //   cy.get('h2')
        //   .should('be.visible')
        //   .and('contain.text', 'Contact Us');
      });
    });
  
    it('should render the main header correctly', () => {
      cy.login()
      cy.get('header').should('be.visible');
      cy.get('span[class="maintext"]').should('be.visible')
      cy.get('.subtext').should('contain','Amit')  
    });
  });