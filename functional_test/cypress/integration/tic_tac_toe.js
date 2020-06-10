describe('Play tic tac toe', () => {
    it('Displays X as the winner', () => {
        cy.visit('http://localhost:3000');

        const squareId = '[data-testid="square"]';

        cy.get(squareId).eq(0).click();
        cy.get(squareId).eq(1).click();
        cy.get(squareId).eq(4).click();
        cy.get(squareId).eq(2).click();
        cy.get(squareId).eq(8).click();

        const statusId = '[data-testid="status"';

        cy.get(statusId)
            .should('contain', 'Winner: X');
    });
});