import React from 'react';
import PropTypes from 'prop-types';

export default function InitiativeList({ characters, turn }) {
  const orderedInitiative = characters.sort((a, b) => b.initiative - a.initiative);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Initiative</th>
          <th>HP</th>
        </tr>
      </thead>
      {orderedInitiative.map((character, index) => (
        <tr style={turn === index ? { backgroundColor: '#f0f' } : null}>
          <td>{character.name}</td>
          <td>{character.initiative}</td>
          <td>{character.hp}</td>
        </tr>
      ))}
    </table>
  );
}

InitiativeList.propTypes = {
  characters: PropTypes.array.isRequired,
  turn: PropTypes.number.isRequired,
};
