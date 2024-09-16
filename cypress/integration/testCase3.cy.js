describe('Edge cases', () => {

    it('should show an error message when login input is invalid', () => {
        // cy.visit('https://automationteststore.com/');
        cy.login()
          // Navigate to the contact page
        cy.get('a[href$="index.php?rt=content/contact"]').click();
        
        cy.get('#ContactUsFrm_email').type('amit.parte2')

        cy.get('#ContactUsFrm_enquiry').type('xyz')

        cy.get('.col-md-6 > .btn').click()

        cy.get('span[class="help-block"]').should('be.visible')
        
    });

    it('should show an error invalid Inputs', () => {
        cy.visit('https://automationteststore.com/index.php?rt=account/login')

        cy.get('#accountFrm > fieldset > .btn').click()
        cy.url().should('include','/create')
        cy.get('#AccountFrm_firstname').type('Amit')
        cy.get('#AccountFrm_lastname').type('parate')
        cy.get('#AccountFrm_email').type('amit.parate12.com')
        cy.get('#AccountFrm_telephone').type('898296382')
        cy.get('#AccountFrm_fax').type('5622789')
        cy.get('#AccountFrm_company').type('wipro')
        cy.get('#AccountFrm_address_1').type('at post pune')
        cy.get('#AccountFrm_city').type('pune')
        cy.get('#AccountFrm_postcode').type('752653')
        cy.get('#AccountFrm_loginname').type('username')
        cy.get('#AccountFrm_password').type('pass@123')
        cy.get('#AccountFrm_confirm').type('pass@123')

        cy.get('#AccountFrm_newsletter1').click()
        cy.get('#AccountFrm_agree').check()
        cy.get('.col-md-2 > .btn').click()

        cy.get('span[class="help-block"]').should('be.visible')
    });


})    