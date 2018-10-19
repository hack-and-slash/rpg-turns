describe('RPG Turns', () => {
  it('should add the characters ordered by initiative', () => {
    const data = [
      { name: 'Galmiir', initiative: 10 },
      { name: 'Tuti', initiative: 15 }
    ]

    cy.visit('/')

    data.map((character) => {
      cy.get('input[name="name"]').type(character.name);
      cy.get('input[name="initiative"]').type(character.initiative);
      cy.contains('add').click();
    })
  });
});