describe('Star Wars App UI - Home', () => {
  it('Should return true when aplication running correct', () => {
    cy.visit('/');

    cy.contains('SWAPI | Explore o universo Star Wars');
  });
});
