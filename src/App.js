import React, { Component } from 'react';

import CharacterForm from './components/CharacterForm';
import InitiativeList from './components/InitiativeList';

class App extends Component {
  state = {
    characters: [],
    turn: 0
  }

  handleSubmit = (values, actions) => {
    if( !(values.name && values.initiative) ) {
      return;
    }

    this.setState({
      characters: [
        ...this.state.characters,
        {
          name: values.name,
          initiative: values.initiative,
        }
      ]
    })
    actions.resetForm();
  }

  handleNextTurn = () => {
    const nextTurn = this.state.characters.length - 1 > this.state.turn ? this.state.turn + 1 : 0
    this.setState({ turn: nextTurn })
  }

  render() {
    return (
      <React.Fragment>
        <CharacterForm handleSubmit={this.handleSubmit} />
        <button onClick={this.handleNextTurn}>next</button>
        <InitiativeList characters={this.state.characters} turn={this.state.turn} />
      </React.Fragment>
    );
  }
}

export default App;
