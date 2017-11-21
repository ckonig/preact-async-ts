import { h, Component } from 'preact';

export default class Async extends Component<{}, {}> {
  componentDidMount() {
    console.log('Async component mounted');
  }

  render() {
    return (
      <main>
        Lazily loading is my jam. <a href="/">Back.</a>
      </main>
    );
  }
}
