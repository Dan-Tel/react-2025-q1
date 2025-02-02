import { Component, ReactNode } from 'react';
import { ICharacter } from '../../App';
import Loader from '../Loader/Loader';
import SWAPI from '../../services/SWAPI';

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
      <ul>
        {this.state.characters.map(({ name }, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
    ) : null;

    return (
      <>
        {loader}
        {charactersList}
      </>
    );
  }
}

export default CharactersList;
