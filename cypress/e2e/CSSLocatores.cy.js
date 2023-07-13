require('@cypress/xpath');

describe('CSSLocators', () => {
    it('css locators', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type('Admin')
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').type('admin123')
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click()

        cy.xpath('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[2]/ul/li/span/p').contains('Paul Bambang')
    })
})