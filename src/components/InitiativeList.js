import React from 'react';
import PropTypes from 'prop-types';

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
          <tr key={character.id} style={turn === index ? { backgroundColor: '#f0f' } : null}>
            <td>{character.name}</td>
            <td>{character.initiative}</td>
            <td><button type="button" onClick={() => removeCharacter(character.id)}>x</button></td>
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
