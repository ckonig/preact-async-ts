import { h, Component } from 'preact';

export default class Async extends Component<{}, {}> {
  componentDidMount() {
    console.log('Async component mounted');
  }

  render() {
    return <main>Lazily loadeding is my jam</main>;
  }
}
