import { h, Component } from 'preact';

export default class NotAsync extends Component<{}, {}> {
  render() {
    return (
      <main>
        Not loaded async. <a href="/">Back.</a>
      </main>
    );
  }
}
