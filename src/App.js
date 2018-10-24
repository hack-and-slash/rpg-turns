import React, { Component } from 'react';

import CharacterForm from './components/CharacterForm';
import InitiativeList from './components/InitiativeList';

class App extends Component {
  state = {
    characters: [
      {
        name: 'teste1',
        initiative: 8,
        hp: 12,
      },
      {
        name: 'teste2',
        initiative: 5,
        hp: 0,
      },
      {
        name: 'teste3',
        initiative: 7,
        hp: 0,
      },
      {
        name: 'teste4',
        initiative: 3,
        hp: 25,
      },
      {
        name: 'teste4',
        initiative: 2,
        hp: 0,
      },
    ],
    turn: 0,
  }

  handleSubmit = (values, actions) => {
    const { characters } = this.state;

    this.setState({
      characters: [
        ...characters,
        {
          name: values.name,
          initiative: values.initiative,
          hp: values.hp,
        },
      ],
    });
    actions.resetForm();
  }

  handleNextTurn = () => {
    const { characters, turn } = this.state;
    let nextTurn = characters.length - 1 > turn ? turn + 1 : 0;
    while (characters[nextTurn].hp <= 0) {

      nextTurn += 1;

      if (nextTurn >= characters.length - 1) {
        nextTurn = 0;
      }
    }

    this.setState({ turn: nextTurn });
  }

  render() {
    const { characters, turn } = this.state;

    return (
      <React.Fragment>
        <CharacterForm handleSubmit={this.handleSubmit} />
        <button onClick={this.handleNextTurn} type="button">next</button>
        <InitiativeList characters={characters} turn={turn} />
      </React.Fragment>
    );
  }
}

export default App;
