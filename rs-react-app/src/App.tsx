import { Component } from 'react';

import './App.css';

import SWAPI from './services/SWAPI';
import Search from './components/Search/Search';
import CharactersList from './components/CharactersList/CharactersList';

export interface ICharacter {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

interface IState {
  term: string;
  characters: ICharacter[];
}

class App extends Component<null, IState> {
  state: IState = {
    term: '',
    characters: [],
  };

  swapi: SWAPI;

  constructor(props: null) {
    super(props);
    this.swapi = new SWAPI();
  }

  loadCharacters(): void {
    this.swapi
      .getAllCharactersFromPage(1, this.state.term)
      .then((res) => this.setState({ characters: res.results }));
  }

  onSearchSubmit = (term: string) => {
    if (term == this.state.term) return;

    this.setState({ term });
  };

  componentDidMount(): void {
    this.loadCharacters();
  }

  componentDidUpdate(_prevProps: null, prevState: Readonly<IState>): void {
    if (prevState.term == this.state.term) return;

    this.loadCharacters();
  }

  render() {
    return (
      <>
        <Search onSearchSubmit={this.onSearchSubmit} />
        <hr></hr>
        <CharactersList
          term={this.state.term}
          characters={this.state.characters}
        />
      </>
    );
  }
}

export default App;
