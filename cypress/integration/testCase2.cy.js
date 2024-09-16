describe('Functionality Test', ()=>{
    it('user login with valid credentials',()=>{
        cy.visit('https://automationteststore.com/index.php?rt=account/login')

        cy.get("input[id='loginFrm_loginname']").type('Amitparate')

        cy.get("input[id='loginFrm_password']").type('Amitp@123')

        cy.get("button[title='Login']").click()

        cy.url().should('include','account')

        cy.get('#customer_menu_top > :nth-child(1) > .top > .menu_text').should('contain',"Amit")
    })

    it('should have a visible search box', () => {

        cy.login()
        cy.get('input[name="filter_keyword"]')
          .should('be.visible')
          .and('have.attr', 'type', 'text').type('fragrance');
         cy.get('.button-in-search').click() 
         cy.get('a[data-id="78"]').eq(1).click({force:true})
         cy.get('.cart').click()
      });

      it.skip('Remove item from a cart', () => {
        cy.login()
        cy.get('.dropdown-toggle > .fa').should('be.visible').click()

        cy.get(':nth-child(5) > :nth-child(7) > .btn > .fa').click()   
      });

      it.skip('checkout Process',()=>{
        cy.login()

        cy.get('.dropdown-toggle > .fa').should('be.visible').click()

        cy.get('#cart_checkout1').should('be.visible').click()

        cy.url().should('contain','checkout')

        cy.get('#checkout_btn').click()

      })
   
})