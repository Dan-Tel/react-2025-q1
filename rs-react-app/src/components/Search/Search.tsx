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
    term: localStorage.getItem('term') ?? '',
  };

  componentDidMount(): void {
    this.onSearchSubmit();
  }

  onSearchChange = (e: ChangeEvent) => {
    const input: HTMLInputElement = e.target as HTMLInputElement;
    localStorage.setItem('term', input.value);
    this.setState({ term: input.value });
  };

  onSearchSubmit = () => {
    const processedTerm = this.state.term.trim();
    localStorage.setItem('term', processedTerm);
    this.props.onSearchSubmit(processedTerm);
    this.setState({ term: processedTerm });
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
