describe('Dialog Page', () => {
    it('Checking form "Return Result From Dialog"', () => {
        cy.visit('pages/modal-overlays/dialog');
        cy.get('.form-input-card .result-from-dialog').contains('Enter Name').click();

        cy.get('nb-dialog-container').as('popup');
        cy.get('@popup').contains('nb-card-header', 'Enter your name');
        cy.get('@popup').find('input').should('have.attr', 'placeholder', 'Name');
        cy.get('@popup').find('button').contains('Cancel');
        cy.get('@popup').find('button').contains('Submit');
    })
})