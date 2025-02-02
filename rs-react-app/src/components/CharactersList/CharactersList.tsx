import { Component } from 'react';

import { ICharacter } from '../../App';

interface IProps {
  term: string;
  characters: ICharacter[];
}

class CharactersList extends Component<IProps> {
  render() {
    return (
      <ul>
        {this.props.characters.map(({ name }, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
    );
  }
}

export default CharactersList;
