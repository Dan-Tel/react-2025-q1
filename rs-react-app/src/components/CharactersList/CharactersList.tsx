import { Component } from 'react';

import SWAPI from '../../services/SWAPI';

interface IState {
  characters: ICharacter[];
}

interface ICharacter {
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

class CharactersList extends Component {
  swapi: SWAPI;
  state: IState = {
    characters: [],
  };

  constructor(props: object) {
    super(props);

    this.swapi = new SWAPI();
  }

  componentDidMount(): void {
    this.swapi
      .getAllCharactersFromPage(1)
      .then((res) => this.setState({ characters: res.results }));
  }

  componentDidUpdate(): void {
    console.log(this.state);
  }

  render() {
    const { characters } = this.state;
    return (
      <ul>
        {characters.map(({ name }, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
    );
  }
}

export default CharactersList;
