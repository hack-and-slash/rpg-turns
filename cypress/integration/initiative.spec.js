// / <reference types="Cypress" />

describe('RPG Turns', () => {
  it('should add the characters ordered by initiative', () => {
    const data = [
      { name: 'Galmiir', initiative: 10 },
      { name: 'Tuti', initiative: 15 },
    ];

    cy.visit('/');

    data.map((character) => {
      cy.get('input[name="name"]').type(character.name);
      cy.get('input[name="initiative"]').type(character.initiative);
      cy.contains('add').click();
    });

    const dataOrderedByInitiative = [
      { name: 'Tuti', initiative: 15 },
      { name: 'Galmiir', initiative: 10 },
    ];

    dataOrderedByInitiative.map((character, index) => {
      cy.contains(`tr:nth-child(${index + 1}) td:nth-child(1)`, character.name);
      cy.contains(`tr:nth-child(${index + 1}) td:nth-child(2)`, character.initiative);
    });
  });

  it('should prevent empty forms to be submitted', () => {
    cy.visit('/');
    cy.contains('add').click();
    cy.get('table').find('tr').should('have.length', 1);
  });
});
