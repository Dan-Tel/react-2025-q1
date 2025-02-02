import { Component } from 'react';
import './ErrorButton.css';

interface IState {
  error: boolean;
}

class ErrorButton extends Component<object, IState> {
  state = {
    error: false,
  };

  render() {
    if (this.state.error) {
      throw new Error('error boundary testing');
    }

    return (
      <button
        className="error-btn"
        onClick={() => this.setState({ error: true })}
      >
        Error Button
      </button>
    );
  }
}

export default ErrorButton;
