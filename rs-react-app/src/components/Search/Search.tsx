import { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="search-field">
        <input placeholder="Write a person name" type="text" />
        <button>Search</button>
      </div>
    );
  }
}

export default Search;
