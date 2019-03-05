import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Button from './Button';
import icon from '../image/favicon.ico';

const Table = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  :not(:last-child) {
    border-bottom: 1px solid #DFE3E8;
  }
`;

const TableCell = styled.td`
  padding: 8px 4px;

  ${props => props.align && css`text-align: ${props.align};`}
  ${props => props.isActive && css`font-weight: bold;`}
`;

const TurnIcon = styled.img`
  position: relative;
  top: 2px;
  margin-right: 4px;
`;

export default function InitiativeList({ characters, turn, removeCharacter }) {
  const orderedInitiative = characters.sort((a, b) => b.initiative - a.initiative);

  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Initiative</th>
        </tr>
      </thead>
      <tbody>
        {orderedInitiative.map((character, index) => (
          <TableRow key={character.id}>
            <TableCell isActive={turn === index}>
              {turn === index && (
                <TurnIcon src={icon} data-test-id="turn-icon" />
              )}
              <span>{character.name}</span>
            </TableCell>
            <TableCell>{character.initiative}</TableCell>
            <TableCell align="right">
              <Button
                type="button"
                data-test-id="delete-button"
                onClick={() => removeCharacter(character.id)}
                uppercase
              >
                Remove
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}

InitiativeList.propTypes = {
  characters: PropTypes.array.isRequired,
  turn: PropTypes.number.isRequired,
  removeCharacter: PropTypes.func.isRequired,
};
