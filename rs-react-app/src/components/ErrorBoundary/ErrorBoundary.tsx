import { Component, ComponentType, ReactNode } from 'react';
import './ErrorBoundary.css';

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
    console.log(error);
  }

  onErrorReset = () => {
    this.props.onSearchSubmit('');
    this.setState({ error: false, message: '' });
  };

  render() {
    if (this.state.error) {
      return (
        <div className="error-boundary">
          <this.props.FallbackUI text={this.state.message} />
          <button onClick={this.onErrorReset}>Reset</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
