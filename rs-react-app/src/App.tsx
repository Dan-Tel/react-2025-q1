import { Component } from 'react';

import './App.css';

import Search from './components/Search/Search';
import CharactersList from './components/CharactersList/CharactersList';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ErrorButton from './components/ErrorButton/ErrorButton';

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
  loading: boolean;
  error: boolean;
}

class App extends Component<null, IState> {
  state: IState = {
    term: '',
    loading: true,
    error: false,
  };

  onSearchSubmit = (term: string) => {
    if (term == this.state.term) return;

    this.setState({ term });
  };

  render() {
    // if (this.state.error) {
    //   throw new Error('error boundary testing');
    // }

    return (
      <ErrorBoundary
        onSearchSubmit={this.onSearchSubmit}
        FallbackUI={ErrorMessage}
      >
        <Search onSearchSubmit={this.onSearchSubmit} />
        <hr></hr>

        <CharactersList term={this.state.term} />

        <ErrorButton />
      </ErrorBoundary>
    );
  }
}

export default App;
