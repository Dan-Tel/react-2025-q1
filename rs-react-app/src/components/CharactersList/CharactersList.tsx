import { Component, ReactNode } from 'react';
import Loader from '../Loader/Loader';
import SWAPI from '../../services/SWAPI';
import './CharactersList.css';

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

interface IProps {
  term: string;
}

interface IState {
  characters: ICharacter[];
  loading: boolean;
  error: Error | null;
}

class CharactersList extends Component<IProps, IState> {
  state = {
    characters: [],
    loading: true,
    error: null,
  };

  swapi: SWAPI;

  constructor(props: IProps) {
    super(props);
    this.swapi = new SWAPI();
  }

  componentDidMount(): void {
    this.loadCharacters();
  }

  componentDidUpdate(prevProps: Readonly<IProps>): void {
    if (prevProps.term == this.props.term) return;

    this.setState({ loading: true, error: null });
    this.loadCharacters();
    console.log('update');
  }

  loadCharacters(): void {
    this.swapi
      .getAllCharactersFromPage(1, this.props.term)
      .then((res) => this.setState({ characters: res.results, loading: false }))
      .catch((e) => {
        this.setState({ error: e });
      });
  }

  render() {
    if (this.state.error !== null) {
      throw this.state.error;
    }

    const loader: ReactNode | null = this.state.loading ? <Loader /> : null;
    const charactersList: ReactNode = !this.state.loading ? (
      <>
        <div className="characters-list__header">
          <p>
            <span className="yellow-text">[i]</span> Charaters name
          </p>
          <p>Description</p>
        </div>
        <ul>
          {this.state.characters.map(({ name, height, mass }, i) => (
            <li key={i}>
              <p>
                [{i}] {name}
              </p>
              <p>
                {height}cm, {mass}kg
              </p>
            </li>
          ))}
        </ul>
      </>
    ) : null;

    return (
      <div className="characters-list">
        {loader}
        {charactersList}
        <div className="pagination">
          1/8
          <span className="next-page">{' ->'}</span>
        </div>
      </div>
    );
  }
}

export default CharactersList;
