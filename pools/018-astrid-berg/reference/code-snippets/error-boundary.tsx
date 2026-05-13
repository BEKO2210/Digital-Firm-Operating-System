import { Component, PropsWithChildren } from 'react';

type State = { error?: Error };

export class ErrorBoundary extends Component<PropsWithChildren, State> {
  state: State = {};
  static getDerivedStateFromError(error: Error) { return { error }; }
  render() {
    if (this.state.error) return <p role="alert">Something went wrong.</p>;
    return this.props.children;
  }
}
