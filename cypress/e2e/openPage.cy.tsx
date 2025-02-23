import '../support/commands';

describe('Page opening', () => {
    beforeEach(() => {
        cy.visit('/');
    })
    it('should have title', ()=>{
        cy.get('h1').as('title');
        cy.get('@title').should('exist');
    });
})