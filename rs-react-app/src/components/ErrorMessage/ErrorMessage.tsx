import { Component } from 'react';

interface IProps {
  text: string;
}

class ErrorMessage extends Component<IProps> {
  render() {
    return (
      <div className="error-message">
        <span className="yellow-text">Error message:</span> {this.props.text}{' '}
        (╥﹏╥)
      </div>
    );
  }
}

export default ErrorMessage;
