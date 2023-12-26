describe('Stepper Page', () => {
    it('Should have correct titles after each pressing next', () => {
      cy.visit('pages/layout/stepper');
      cy.get('nb-stepper[orientation="horizontal"]').as('container');
      cy.get('@container').find('h3').as('titleText');
      cy.get('@container').contains('Next',{ matchCase: false }).as('btnNext');

      cy.get('@titleText').should('text', 'Step content #1');
      cy.get('@btnNext').click();

      cy.get('@titleText').should('text', 'Step content #2');
      cy.get('@btnNext').click();

      cy.get('@titleText').should('text', 'Step content #3');
      cy.get('@btnNext').click();

      cy.get('@titleText').should('text', 'Step content #4');
            
      cy.get('@btnNext').should('be.disabled')
    })
  })