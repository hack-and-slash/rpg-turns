import React from 'react'

export default function InitiativeList(props) {
  const orderedInitiative = props.characters.sort((a, b) => b.initiative - a.initiative);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Initiative</th>
        </tr>
      </thead>
      {orderedInitiative.map((character, index) => (
        <tr style={props.turn === index ? { backgroundColor: '#f0f' } : null}>
          <td>{character.name}</td>
          <td>{character.initiative}</td>
        </tr>
      ))}
    </table>
  )
}
