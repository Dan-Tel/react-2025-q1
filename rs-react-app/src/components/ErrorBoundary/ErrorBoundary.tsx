import { Component, ComponentType, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  onSearchSubmit: (term: string) => void;
  FallbackUI: ComponentType<{ text: string }>;
}

interface IState {
  error: boolean;
  message: string;
}

class ErrorBoundary extends Component<IProps, IState> {
  state = {
    error: false,
    message: '',
  };

  static getDerivedStateFromError() {
    return { error: true };
  }

  componentDidCatch(error: Error): void {
    this.setState({ message: error.message });
  }

  onErrorReset = () => {
    this.props.onSearchSubmit('');
    this.setState({ error: false, message: '' });
  };

  render() {
    if (this.state.error) {
      return (
        <>
          <button onClick={this.onErrorReset}>Reset</button>
          <this.props.FallbackUI text={this.state.message} />
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
