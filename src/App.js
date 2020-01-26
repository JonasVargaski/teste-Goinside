import React from 'react';
import { Router } from 'react-router-dom';
import history from './services/history';

import GlobalStyle from './styles/global';
import Routes from './routes';
import ShoppingContext from './store/provider';

export default function App() {
  return (
    <>
      <GlobalStyle />

      <Router history={history}>
        <ShoppingContext>
          <Routes />
        </ShoppingContext>
      </Router>
    </>
  );
}
