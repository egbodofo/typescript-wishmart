import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from '../src/components/Footer/Footer';
import Home from '../src/components/Home/Home';
import Navigation from '../src/components/Navigation/Navigation';

class Index extends Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    // component will be able to read from store's state when rendered
    store.dispatch({ type: 'FOO', payload: 'foo' });
  }
  render() {
    return (
      <div>
        <Navigation />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default connect(state => state)(Index);
