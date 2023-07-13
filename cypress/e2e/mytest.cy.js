describe('My first test plan', () => {
    it('Verify title - positive', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq', 'OrangeHRM')
    }),

    it('Verify title - negative', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq', 'OrangeHRM123')
    })
})