import React from 'react';

import { Switch, Redirect, Route } from 'react-router-dom';

import { Layout, Container } from './components/Layout';
import Header from './components/Header';

import Shopping from './pages/Shopping';
import Cart from './pages/Cart';

export default function Routes() {
  return (
    <Layout>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={Shopping} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/*" component={() => <Redirect to="/" />} />
        </Switch>
      </Container>
    </Layout>
  );
}
