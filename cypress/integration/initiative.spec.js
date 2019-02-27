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
    cy.get('table').should('have.length', 0);
  });

  it('should add multiples characters when how many field is filled', () => {
    const numberOfCharacters = 10;

    cy.visit('/');

    cy.get('input[name="howMany"]').type(numberOfCharacters);
    cy.get('input[name="name"]').type('Goblin');
    cy.get('input[name="initiative"]').type(8);
    cy.contains('add').click();

    cy.get('table').find('tr').should('have.length', numberOfCharacters + 1);
  });

  it('should remove an entry when click on remove button', () => {
    cy.visit('/');

    cy.get('input[name="name"]').type('Black Dragon');
    cy.get('input[name="initiative"]').type(10);
    cy.contains('add').click();

    cy.get('table').find('tr').should('have.length', 2);

    cy.get('[data-test-id="delete-button"]').click();
    cy.get('table').find('tr').should('have.length', 1);
  });

  it('should move to the next character on-turn class when click in next', () => {
    const numberOfCharacters = 5;
    cy.visit('/');

    cy.get('input[name="howMany"]').type(numberOfCharacters);
    cy.get('input[name="name"]').type('Goblin');
    cy.get('input[name="initiative"]').type(2);
    cy.contains('add').click();

    cy.get('tr:nth-child(1)').should('has.class', 'on-turn');

    cy.get('[data-test-id="next-button"]').click();

    cy.get('tr:nth-child(2)').should('has.class', 'on-turn');
  });
});
