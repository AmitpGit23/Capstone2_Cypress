describe('Basic Tests', ()=>{
    it('test cases to ensure that the application loads correctly',()=>{
        cy.visit('https://automationteststore.com/')

        cy.get('header').should('be.visible')

        cy.get('.logo > img').should('be.visible')

        cy.xpath('//*[@id="main_menu"]/li[1]').should('not.be.visible');
        
        // Hover over the button //*[@id="main_menu"]/li[1]
        cy.xpath('//*[@id="main_menu"]/li[1]').trigger('mouseover',{force: true});
        
        cy.get('.nav').should('be.visible');

        cy.get('.footersocial > .container-fluid').should('contain.text','About Us')

        // lOad with different Devices
        cy.viewport('macbook-11')
        cy.wait(200)
        cy.viewport('iphone-5')
        cy.wait(200)
    })
 
})