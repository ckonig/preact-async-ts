import { h, Component } from 'preact';

export default class Home extends Component<{}, {}> {
  constructor(props?: {}, context?: any) {
    super(props, context);
    console.log('Home constructor called.');
  }

  componentDidMount() {
    console.log('Home did mount');
  }

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
