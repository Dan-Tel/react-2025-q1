import { Component } from 'react';

interface IProps {
  text: string;
}

class ErrorMessage extends Component<IProps> {
  render() {
    return (
      <>
        <div>{this.props.text}</div>
      </>
    );
  }
}

export default ErrorMessage;
