import React, { Component } from 'react';

import CharacterForm from './components/CharacterForm';
import InitiativeList from './components/InitiativeList';

class App extends Component {
  state = {
    characters: [],
    turn: 0
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      characters: [
        ...this.state.characters,
        {
          name: event.target.name.value,
          initiative: event.target.initiative.value,
        }
      ]
    })
  }

  handleNextTurn = () => {
    const nextTurn = this.state.characters.length - 1 > this.state.turn ? this.state.turn + 1 : 0
    this.setState({ turn: nextTurn })
  }

  render() {
    return (
      <React.Fragment>
        <CharacterForm onSubmit={this.handleSubmit} />
        <button onClick={this.handleNextTurn}>next</button>
        <InitiativeList characters={this.state.characters} turn={this.state.turn} />
      </React.Fragment>
    );
  }
}

export default App;
