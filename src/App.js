import React from 'react';

import GlobalStyle from './styles/global';
import DefaultLayout from './pages/_layouts/default';
import StoclItems from './pages/StockItems';
import AppContext from './store/provider';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <AppContext>
        <DefaultLayout>
          <StoclItems />
        </DefaultLayout>
      </AppContext>
    </>
  );
}
