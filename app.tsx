import { h, render, Component } from 'preact';
import { Router, RouterOnChangeArgs } from 'preact-router';
import AsyncRoute from 'preact-async-route';
import Home from './home';
import NotAsync from './notasync';

export default class App extends Component<{}, {}> {
  async getAsync() {
    console.log('getting async...');
    const module = await import(/* webpackChunkName: "async" */ './async');
    return module.default;
  }

  render() {
    return (
      <Router>
        <Home path="/" />
        <NotAsync path="/notasync" />
        <AsyncRoute path="/async" getComponent={this.getAsync} />
      </Router>
    );
  }
}

render(<App />, document.body);
