import { Component } from 'react';

import './App.css';

import Search from './components/Search/Search';
import CharactersList from './components/CharactersList/CharactersList';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ErrorButton from './components/ErrorButton/ErrorButton';

interface IState {
  term: string;
  loading: boolean;
  error: boolean;
}

class App extends Component<object, IState> {
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
    return (
      <div className="app">
        <ErrorBoundary
          onSearchSubmit={this.onSearchSubmit}
          FallbackUI={ErrorMessage}
        >
          <Search onSearchSubmit={this.onSearchSubmit} />

          <CharactersList term={this.state.term} />

          <ErrorButton />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
