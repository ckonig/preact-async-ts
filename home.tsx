import { h, Component } from 'preact';

export default class Home extends Component<{}, {}> {
  render() {
    return (
      <main>
        <div>
          <a href="/notasync">Not async page</a>
        </div>
        <div>
          <a href="/async">Async page</a>
        </div>
      </main>
    );
  }
}
