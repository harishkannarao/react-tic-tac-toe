describe('Play tic tac toe', () => {
    it('Displays X as the winner', () => {
        cy.visit('http://localhost:3000');

        const squareId = '[data-testid="square"]';

        cy.get(squareId).eq(0).click();
        cy.get(squareId).eq(1).click();
        cy.get(squareId).eq(4).click();
        cy.get(squareId).eq(2).click();
        cy.get(squareId).eq(8).click();

        cy.get('[data-testid="status"')
            .should(($div) => {
                expect($div).to.have.length(1)
                expect($div[0]).to.have.text('Winner: X')
            });
    });

    it('Displays the moves in sequence', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="status"')
            .eq(0)
            .then(($button) => {
                expect($button.text()).to.equal('Next player: X');
            });

        cy.get('[data-testid="move"')
            .eq(0)
            .then(($button) => {
                const move = $button.text();
                expect(move).to.equal('Go to game start');
            });

        const squareId = '[data-testid="square"]';

        cy.get(squareId).eq(0).click();
        cy.get('[data-testid="status"')
            .eq(0)
            .then(($button) => {
                expect($button.text()).to.equal('Next player: O');
            });
        cy.get('[data-testid="move"')
            .eq(1)
            .then(($button) => {
                const move = $button.text();
                expect(move).to.equal('Go to move #1');
            });

        cy.get(squareId).eq(1).click();
        cy.get('[data-testid="status"')
            .eq(0)
            .then(($button) => {
                expect($button.text()).to.equal('Next player: X');
            });
        cy.get('[data-testid="move"')
            .eq(2)
            .then(($button) => {
                const move = $button.text();
                expect(move).to.equal('Go to move #2');
            });
    });
});