import React, { Component } from 'react';
import nanoid from 'nanoid';

import CharacterForm from './components/CharacterForm';
import InitiativeList from './components/InitiativeList';

class App extends Component {
  state = {
    characters: [],
    turn: 0,
  }

  handleSubmit = (values, actions) => {
    const { howMany, name, initiative } = values;
    if (!(values.name && values.initiative)) {
      return;
    }

    const { characters } = this.state;

    const numberOfCharacters = Array(howMany || 1);
    const newCharacters = Array.from(numberOfCharacters, (value, index) => ({
      id: nanoid(),
      name: numberOfCharacters.length > 1 ? `${name} ${index + 1}` : name,
      initiative,
    }));

    this.setState({
      characters: [
        ...characters,
        ...newCharacters,
      ],
    });

    actions.resetForm();
  }

  handleNextTurn = () => {
    const { characters, turn } = this.state;
    const nextTurn = characters.length - 1 > turn ? turn + 1 : 0;
    this.setState({ turn: nextTurn });
  }

  removeCharacter = (removingCharacterId) => {
    const { characters } = this.state;
    const newCharactersList = characters.filter(character => character.id !== removingCharacterId);
    this.setState({
      characters: [
        ...newCharactersList,
      ],
    });
  }

  render() {
    const { characters, turn } = this.state;

    return (
      <React.Fragment>
        <CharacterForm handleSubmit={this.handleSubmit} />
        <button onClick={this.handleNextTurn} data-cy="next-button" type="button">next</button>
        <InitiativeList
          characters={characters}
          turn={turn}
          removeCharacter={this.removeCharacter}
        />
      </React.Fragment>
    );
  }
}

export default App;
