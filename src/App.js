import React, { Component } from 'react';
import nanoid from 'nanoid';
import styled from 'styled-components';

import CharacterForm from './components/CharacterForm';
import InitiativeList from './components/InitiativeList';
import Header from './components/Header';
import Button from './components/Button';

const AppWrapper = styled.section`
  display: block;
  overflow: auto;
  min-height: 100vh;
  background-color: #F4F6F8;
  padding-bottom: 16px;
`;

const AppCard = styled.div`
  width: 400px;
  max-width: 90%;
  background-color: #fff;
  border-radius: 3px;
  margin: 0 auto;
  box-shadow: 0 1px 2px 0 rgba(63,63,68,.15);
  margin-bottom: 8px;
  overflow: hidden;
`;

const AppCardHeader = styled.div`
  background-color: #F9FAFB;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AppCardBody = styled.div`
  padding: 16px;
`;

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
      <AppWrapper>
        <Header />
        <AppCard>
          <AppCardHeader>
            <p>
              <strong>1 - </strong>
              <span>Add your characters.</span>
            </p>
          </AppCardHeader>
          <AppCardBody>
            <CharacterForm handleSubmit={this.handleSubmit} />
          </AppCardBody>
        </AppCard>
        {characters.length > 0 && (
          <AppCard>
            <AppCardHeader>
              <p>
                <strong>2 - </strong>
                <span>Prepare for battle!</span>
              </p>
              <Button
                uppercase
                type="button"
                data-test-id="next-button"
                onClick={this.handleNextTurn}
              >
                Next turn
              </Button>
            </AppCardHeader>
            <AppCardBody>
              <InitiativeList
                characters={characters}
                turn={turn}
                removeCharacter={this.removeCharacter}
              />
            </AppCardBody>
          </AppCard>
        )}
      </AppWrapper>
    );
  }
}

export default App;
