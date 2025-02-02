import { ChangeEvent, Component } from 'react';

import './Search.css';

interface IProps {
  onSearchSubmit: (term: string) => void;
}

interface IState {
  term: string;
}

class Search extends Component<IProps, IState> {
  state = {
    term: '',
  };

  onSearchChange = (e: ChangeEvent) => {
    const input: HTMLInputElement = e.target as HTMLInputElement;
    this.setState({ term: input.value });
  };

  onSearchSubmit = () => {
    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-field">
        <input
          placeholder="Write a character name..."
          type="text"
          value={this.state.term}
          onChange={this.onSearchChange}
        />
        <button onClick={this.onSearchSubmit}>Search</button>
      </div>
    );
  }
}

export default Search;
