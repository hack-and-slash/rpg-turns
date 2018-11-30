import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './InitiativeList.css';

export default function InitiativeList({ characters, turn, removeCharacter }) {
  const orderedInitiative = characters.sort((a, b) => b.initiative - a.initiative);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Initiative</th>
        </tr>
      </thead>
      <tbody>
        {orderedInitiative.map((character, index) => (
          <tr
            key={character.id}
            className={
            classnames({ 'on-turn': turn === index })}
          >
            <td>{character.name}</td>
            <td>{character.initiative}</td>
            <td><button type="button" data-cy="delete-button" onClick={() => removeCharacter(character.id)}>x</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

InitiativeList.propTypes = {
  characters: PropTypes.array.isRequired,
  turn: PropTypes.number.isRequired,
  removeCharacter: PropTypes.func.isRequired,
};
