import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App, { Container } from 'next/app';
import rootReducer from '../src/utils/rootReducer';
import Head from 'next/head';
import withRedux from 'next-redux-wrapper';

const stored = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

type Props = {
  Component: React.Component;
  store: Store;
};

class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  render() {
    const { store, Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Wishmart</title>
        </Head>

        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default withRedux(stored)(MyApp);