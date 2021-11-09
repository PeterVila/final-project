import React from 'react';
import Home from './pages/home';
import Post from './pages/post';
import Register from './pages/register';

import Navigation from './components/nav-drawer';
import FooterNav from './components/nav-footer';
import { parseRoute } from './lib';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', e => {
      this.setState({
        route: parseRoute(window.location.hash)
      });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Register />;
    }
    if (route.path === 'post') {
      return <Post />;
    }
    if (route.path === 'home') {
      return <Home />;
    }
  }

  render() {
    return (
    <>
    <Navigation path={this.state.route.path}/>
    { this.renderPage() }
    <FooterNav />
    </>
    );
  }
}
