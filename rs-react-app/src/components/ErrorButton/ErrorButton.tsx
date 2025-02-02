import { Component } from 'react';

interface IState {
  error: boolean;
}

class ErrorButton extends Component {
  state = {
    error: false,
  };

  render() {
    if (this.state.error) {
      throw new Error('error boundary testing');
    }

    return (
      <button onClick={() => this.setState({ error: true })}>
        Error Button
      </button>
    );
  }
}

export default ErrorButton;
